import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

import { ChatAssistantProvider } from "../components/ChatAssistant";
const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 glass shadow-depth border-b border-glass">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-lg bg-clip-text text-transparent bg-hero-gradient">Tej Raval</span>
        <div className="flex gap-4">
          <a href="/" className="px-3 py-1 rounded-lg text-text hover:bg-gradient-to-r hover:from-primary hover:to-purple hover:text-text transition">Home</a>
          <a href="/projects" className="px-3 py-1 rounded-lg text-text hover:bg-gradient-to-r hover:from-primary hover:to-purple hover:text-text transition">Projects</a>
          <a href="/skills" className="px-3 py-1 rounded-lg text-text hover:bg-gradient-to-r hover:from-primary hover:to-purple hover:text-text transition">Skills</a>
          <a href="/resume" className="px-3 py-1 rounded-lg text-text hover:bg-gradient-to-r hover:from-primary hover:to-purple hover:text-text transition">Resume</a>
          <a href="/contact" className="px-3 py-1 rounded-lg text-text hover:bg-gradient-to-r hover:from-primary hover:to-purple hover:text-text transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 glass border-t border-glass text-center text-secondary flex flex-col items-center gap-2">
      <div className="flex gap-4 justify-center mb-2">
        <a href="mailto:tejraval.connect@gmail.com" className="hover:text-purple transition">📧 tejraval.connect@gmail.com</a>
        <span>|</span>
        <span>📍 Visnagar, Gujarat, India</span>
      </div>
      <div className="flex gap-4 justify-center">
        <a href="https://www.linkedin.com/in/tejraval" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition">LinkedIn</a>
        <a href="https://github.com/tejraval" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a>
        <a href="https://leetcode.com/tejraval" target="_blank" rel="noopener noreferrer" className="hover:text-success transition">LeetCode</a>
      </div>
      <div className="mt-2 text-xs text-secondary/60">&copy; {new Date().getFullYear()} Tej Raval. All rights reserved.</div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-bg text-text">
      <body className={`${inter.className} min-h-screen bg-bg relative overflow-x-hidden`}>
        <ChatAssistantProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
          <Footer />
        </ChatAssistantProvider>
      </body>
    </html>
  );
}
