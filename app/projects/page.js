export default function Projects() {
  const projects = [
    {
      name: "Cold Outreach AI Agent System",
      stack: "LangChain, GPT-4o, Python",
      description: "Developed agent workflow for personalized cold outreach emails. Integrated tools for company research, prompt refinement, and function calling. Enabled agent handoff for task coordination (Research → Compose → Review).",
      github: "#", // TODO: Add real link
    },
    {
      name: "ReWear – Community Clothing Exchange Platform",
      stack: "Next.js, Node.js, MongoDB",
      description: "Created a platform to exchange clothes via point or direct swap system. Implemented secure login/auth, item listing, dashboard, and admin panel. Focused on sustainable design and clean user interface.",
      github: "#", // TODO: Add real link
    },
    {
      name: "Crew AI – Autonomous Engineering Team",
      stack: "LangChain, GPT-4o, Python, Next.js",
      description: "Deployed agentic system to plan tasks and generate engineering code. Integrated shared memory routing and tool-assisted task execution. Automated workflows across code generation, testing, and review.",
      github: "#", // TODO: Add real link
    },
    {
      name: "AI Personal Assistant – Portfolio Site",
      stack: "React, GPT-4 API, LangChain",
      description: "Implemented a contextual AI assistant answering visitor queries in real-time. Increased site engagement by enabling interactive project walkthroughs.",
      github: "#", // TODO: Add real link
    },
    {
      name: "Restaurant Review Platform",
      stack: "Java, Spring Boot, Elasticsearch, React, Docker, Kibana",
      description: "OAuth2 Auth, Keycloak Integration, Geospatial search, Kibana visualizations, Microservices design with data indexing.",
      github: "#", // TODO: Add real link
    },
    {
      name: "DoorStep Shine – Car Wash Booking Platform",
      stack: "MERN Stack + Tailwind CSS",
      description: "JWT Auth, Admin Panel, Dynamic Pricing, Mobile-first UI, Slot conflict validation and booking management.",
      github: "#", // TODO: Add real link
    },
  ];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-bg">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-hero-gradient drop-shadow-lg">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map((proj, i) => (
          <div key={i} className="relative glass border border-glass rounded-2xl p-6 card-glow hover:scale-105 transition-all duration-200 group cursor-pointer overflow-hidden">
            <h3 className="text-xl font-semibold mb-2 text-text group-hover:text-purple transition">{proj.name}</h3>
            <p className="text-sm text-secondary mb-2">{proj.stack}</p>
            <p className="text-text/80 mb-4">{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded-lg bg-hero-gradient text-text font-medium button-glow hover:scale-105 transition">GitHub Repo</a>
            {/* TODO: Add modal or details page */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-hero-gradient rounded-full blur-2xl opacity-40 z-0" />
          </div>
        ))}
      </div>
    </main>
  );
} 