import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

const summaryPath = path.join(process.cwd(), 'me', 'summary.txt');
const resumeTextPath = path.join(process.cwd(), 'me', 'resume_tcs.txt');

let cachedResumeText = null;
let cachedSummary = null;

async function getSummary() {
  if (!cachedSummary) {
    cachedSummary = await fs.readFile(summaryPath, 'utf-8');
  }
  return cachedSummary;
}

async function getResumeText() {
  if (!cachedResumeText) {
    cachedResumeText = await fs.readFile(resumeTextPath, 'utf-8');
  }
  return cachedResumeText;
}

// Tool: record_user_details
async function recordUserDetails({ email, name = 'Name not provided', notes = 'not provided' }) {
  // Optionally send pushover notification here
  const token = process.env.PUSHOVER_TOKEN;
  const user = process.env.PUSHOVER_USER;
  if (token && user) {
    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        token,
        user,
        message: `Recording ${name} with email ${email} and notes ${notes}`,
      }),
    });
  }
  return { recorded: 'ok' };
}

// Tool: record_unknown_question
async function recordUnknownQuestion({ question }) {
  const token = process.env.PUSHOVER_TOKEN;
  const user = process.env.PUSHOVER_USER;
  if (token && user) {
    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        token,
        user,
        message: `Recording unknown question: ${question}`,
      }),
    });
  }
  return { recorded: 'ok' };
}

const tools = [
  {
    type: 'function',
    function: {
      name: 'record_user_details',
      description: 'Use this tool to record that a user is interested in being in touch and provided an email address',
      parameters: {
        type: 'object',
        properties: {
          email: { type: 'string', description: "The email address of this user" },
          name: { type: 'string', description: "The user's name, if they provided it" },
          notes: { type: 'string', description: "Any additional information about the conversation that's worth recording to give context" },
        },
        required: ['email'],
        additionalProperties: false,
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'record_unknown_question',
      description: 'Always use this tool to record any question that could not be answered as you did not know the answer',
      parameters: {
        type: 'object',
        properties: {
          question: { type: 'string', description: 'The question that could not be answered' },
        },
        required: ['question'],
        additionalProperties: false,
      },
    },
  },
];

function buildSystemPrompt(summary, resumeText) {
  return `You are acting as Tej Raval. You are answering questions on Tej Raval's website, particularly questions related to Tej Raval's career, background, skills and experience. Your responsibility is to represent Tej Raval for interactions on the website as faithfully as possible. You are given a summary of Tej Raval's background and LinkedIn profile which you can use to answer questions. Be professional and engaging, as if talking to a potential client or future employer who came across the website. If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool.\n\n## Summary:\n${summary}\n\n## LinkedIn/Profile (from resume):\n${resumeText}\n\nWith this context, please chat with the user, always staying in character as Tej Raval.`;
}

export async function POST(req) {
  const { messages } = await req.json();
  const summary = await getSummary();
  const resumeText = await getResumeText();
  const systemPrompt = buildSystemPrompt(summary, resumeText);

  // Prepare OpenAI API call
  const openaiApiKey = process.env.OPENAI_API_KEY;
  const openaiBaseUrl = process.env.OPENAI_BASE_URL || 'https://api.chatanywhere.tech/v1';

  let chatMessages = [
    { role: 'system', content: systemPrompt },
    ...messages,
  ];

  let done = false;
  let reply = '';
  let toolResults = [];

  while (!done) {
    const response = await fetch(`${openaiBaseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: chatMessages,
        tools,
      }),
    });
    const data = await response.json();
    const choice = data.choices[0];
    if (choice.finish_reason === 'tool_calls') {
      const toolCalls = choice.message.tool_calls;
      for (const toolCall of toolCalls) {
        const toolName = toolCall.function.name;
        const args = JSON.parse(toolCall.function.arguments);
        let result;
        if (toolName === 'record_user_details') {
          result = await recordUserDetails(args);
        } else if (toolName === 'record_unknown_question') {
          result = await recordUnknownQuestion(args);
        } else {
          result = {};
        }
        toolResults.push({
          role: 'tool',
          content: JSON.stringify(result),
          tool_call_id: toolCall.id,
        });
      }
      chatMessages.push(choice.message);
      chatMessages.push(...toolResults);
      toolResults = [];
    } else {
      done = true;
      reply = choice.message.content;
    }
  }

  return NextResponse.json({ reply });
} 