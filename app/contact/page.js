
export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-bg">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-hero-gradient drop-shadow-lg">Contact</h2>
      <div className="w-full max-w-2xl glass border border-glass rounded-2xl p-8 card-glow mb-8 flex flex-col gap-6 items-center">
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg glass border border-glass text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-purple" />
          <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg glass border border-glass text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-purple" />
          <textarea placeholder="Your Message" rows={4} className="px-4 py-3 rounded-lg glass border border-glass text-text placeholder-secondary focus:outline-none focus:ring-2 focus:ring-purple" />
          <button type="submit" className="mt-2 px-6 py-3 rounded-lg bg-hero-gradient text-text font-semibold button-glow hover:scale-105 transition">Send Message</button>
        </form>
        <div className="flex gap-4 mt-4">
          <a href="mailto:tejraval.connect@gmail.com" className="px-4 py-2 rounded-lg glass border border-glass text-text flex items-center gap-2 hover:scale-105 transition card-glow"><span>📧</span> Email</a>
          <a href="https://www.linkedin.com/in/tejraval" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg glass border border-glass text-text flex items-center gap-2 hover:scale-105 transition card-glow"><span>🔗</span> LinkedIn</a>
          <a href="https://github.com/tejraval" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg glass border border-glass text-text flex items-center gap-2 hover:scale-105 transition card-glow"><span>💻</span> GitHub</a>
          <a href="https://leetcode.com/tejraval" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg glass border border-glass text-text flex items-center gap-2 hover:scale-105 transition card-glow"><span>🧠</span> LeetCode</a>
        </div>
        <div className="mt-6 text-secondary text-center">
          <span className="block mb-2">Or just ask me anything using the floating AI chat widget! 🤖</span>
          {/* TODO: Add 3D orbit globe here */}
        </div>
      </div>
    </main>
  );
} 