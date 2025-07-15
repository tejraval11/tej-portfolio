
'use client';
import Image from "next/image";
import { useChatAssistant } from "../components/ChatAssistant";

export default function Home() {
  const { openChat } = useChatAssistant();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-bg relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glassy background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-hero-gradient rounded-full blur-3xl opacity-60" />
      </div>
      <div className="z-10 flex flex-col items-center gap-6">
        <div className="w-32 h-32 rounded-full bg-hero-gradient card-glow flex items-center justify-center border-4 border-glass mb-4">
          {/* Avatar placeholder */}
          <span className="text-5xl">🧑‍💻</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-hero-gradient drop-shadow-lg">
          Tej Raval
        </h1>
        <p className="text-lg md:text-xl text-text font-medium text-center max-w-2xl">
          Full Stack Developer | AI Engineer | Problem Solver
        </p>
        <p className="text-base md:text-lg text-secondary text-center max-w-2xl">
          I&apos;m Tej Raval — a full-stack web developer with deep expertise in MERN, Next.js, Spring Boot, and LLM/Agentic AI systems. I specialize in building intelligent, scalable apps and orchestrating modern AI experiences using GPT models and cutting-edge tools. Let’s build the future — with code and cognition. 🧠💻
        </p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:tejraval.connect@gmail.com" className="px-5 py-2 rounded-lg glass border border-glass hover:scale-105 transition card-glow text-text flex items-center gap-2">
            <span>📧</span> tejraval.connect@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tejraval" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg glass border border-glass hover:scale-105 transition card-glow text-text flex items-center gap-2">
            <span>🔗</span> LinkedIn
          </a>
          <a href="https://github.com/tejraval" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg glass border border-glass hover:scale-105 transition card-glow text-text flex items-center gap-2">
            <span>💻</span> GitHub
          </a>
        </div>
        <button
          className="mt-8 px-8 py-4 rounded-full bg-hero-gradient button-glow text-text font-semibold text-lg flex items-center gap-3 border-2 border-glass hover:scale-105 transition-all duration-200"
          onClick={openChat}
        >
          <span className="animate-pulse">⚡</span> Ask Me (AI)
        </button>
      </div>
    </main>
  );
}
