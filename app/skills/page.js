import Image from "next/image";

const skillIcons = {
  "Next.js": "/next.svg",
  "Vercel": "/vercel.svg",
  "Globe": "/globe.svg",
  "File": "/file.svg",
  "Window": "/window.svg",
  "React.js": "🌀",
  "Tailwind CSS": "🌊",
  "JavaScript": "🟨",
  "TypeScript": "🟦",
  "HTML/CSS": "🌐",
  "Node.js": "🌳",
  "Express.js": "🚂",
  "Java": "☕",
  "Spring Boot": "🌱",
  "REST APIs": "🔗",
  "Microservices": "🧩",
  "GPT-4o-mini": "🤖",
  "LangChain": "🔗",
  "Agentic AI": "🧠",
  "LLM Orchestration": "🧬",
  "Prompt Engineering": "✍️",
  "PostgreSQL": "🐘",
  "MongoDB": "🍃",
  "MySQL": "🐬",
  "Docker": "🐳",
  "AWS": "☁️",
  "CI/CD pipelines": "🔄",
  "Git": "🔧",
  "Postman": "📮",
  "Maven": "📦",
  "LeetCode (200+ problems solved)": "🧩",
};

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      color: "from-purple to-primary",
      items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Backend",
      color: "from-primary to-success",
      items: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      category: "AI/LLMs",
      color: "from-success to-purple",
      items: ["GPT-4o-mini", "LangChain", "Agentic AI", "LLM Orchestration", "Prompt Engineering"],
    },
    {
      category: "Databases",
      color: "from-purple to-primary",
      items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "DevOps/Cloud",
      color: "from-primary to-success",
      items: ["Docker", "AWS", "CI/CD pipelines"],
    },
    {
      category: "Other Tools",
      color: "from-success to-purple",
      items: ["Git", "Postman", "Maven", "Vercel", "LeetCode (200+ problems solved)",],
    },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-bg">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-hero-gradient drop-shadow-lg">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {skills.map((group, i) => (
          <div key={i} className={`glass border border-glass rounded-2xl p-6 card-glow hover:scale-105 transition-all duration-200 group cursor-pointer overflow-hidden`}> 
            <h3 className="text-2xl font-bold mb-6 pl-3 border-l-4 border-primary text-text bg-white/10 py-1 rounded-sm shadow-sm">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, j) => (
                <div key={j} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${group.color} text-text font-medium shadow-md hover:scale-105 transition text-sm animate-pulse flex items-center gap-2`}>
                  {skillIcons[item]?.startsWith('/') ? (
                    <Image src={skillIcons[item]} alt={item} width={20} height={20} className="inline-block" />
                  ) : (
                    <span className="text-lg">{skillIcons[item] || '🔹'}</span>
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 