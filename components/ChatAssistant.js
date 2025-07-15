'use client';
import { useState, useRef, useEffect, createContext, useContext } from "react";

const ChatAssistantContext = createContext({ open: false, openChat: () => {}, closeChat: () => {} });

export function useChatAssistant() {
  return useContext(ChatAssistantContext);
}

export function ChatAssistantProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openChat = () => setOpen(true);
  const closeChat = () => setOpen(false);
  return (
    <ChatAssistantContext.Provider value={{ open, openChat, closeChat }}>
      {children}
      <ChatAssistant />
    </ChatAssistantContext.Provider>
  );
}

export default function ChatAssistant() {
  const { open, openChat, closeChat } = useChatAssistant();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Tej Raval, your digital guide. Ask me anything about my projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    setError("");
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.role !== 'error').map(m => ({ role: m.role, content: m.content }))
        })
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'error', content: "Sorry, something went wrong. Please try again." }]);
      setError("Chatbot error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!open && (
        <button
          className="w-16 h-16 rounded-full bg-purple button-glow animate-pulse flex items-center justify-center text-2xl fixed bottom-6 right-6 z-50"
          onClick={openChat}
          aria-label="Open AI Chat Assistant"
        >
          🤖
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw] glass border border-glass rounded-2xl card-glow flex flex-col h-[32rem]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-glass">
            <span className="font-semibold text-text">Ask Tej (AI)</span>
            <button onClick={closeChat} className="text-secondary hover:text-text">✖</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-bg/80">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-xl max-w-[80%] whitespace-pre-line text-sm shadow-md ${msg.role === 'user' ? 'bg-gradient-to-r from-primary to-purple text-text self-end' : msg.role === 'assistant' ? 'glass text-text' : 'bg-error text-text'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} className="p-3 border-t border-glass bg-bg/60 flex gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg glass border border-glass text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-purple"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-hero-gradient text-text font-semibold button-glow hover:scale-105 transition disabled:opacity-60"
              disabled={loading || !input.trim()}
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 