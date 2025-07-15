export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-bg">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-hero-gradient drop-shadow-lg">Resume</h2>
      <a href="../../Tej_A_Raval.pdf" download className="mb-8 px-6 py-3 rounded-lg bg-hero-gradient text-text font-semibold button-glow hover:scale-105 transition">Download PDF</a>
      <div className="w-full max-w-3xl glass border border-glass rounded-2xl p-8 card-glow mb-8">
        <h3 className="text-xl font-bold mb-4 text-text">Experience</h3>
        <div className="border-l-2 border-purple/60 pl-6">
          <div className="mb-8">
            <div className="text-base font-semibold text-purple">Unified Mentor – Full Stack Developer Intern</div>
            <div className="text-sm text-secondary mb-1">Oct 2024 – Nov 2024 (Remote)</div>
            <div className="text-text/80">Built full-stack eCommerce app using MERN stack. Implemented JWT authentication + responsive React UI. Connected custom REST APIs to MongoDB backend.</div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl glass border border-glass rounded-2xl p-8 card-glow">
        <h3 className="text-xl font-bold mb-4 text-text">Achievements</h3>
        <ul className="list-disc pl-6 text-text/80 space-y-2">
          <li>🧠 200+ LeetCode Problems Solved</li>
          <li>🧪 TCS iON – 90.14% Cognitive Skills</li>
          <li>🧰 Completed Spring Boot & MERN stack certifications</li>
          <li>🏸 3x University-Level Badminton Champion</li>
        </ul>
      </div>
    </main>
  );
} 