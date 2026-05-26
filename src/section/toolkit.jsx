const logos = [
  { name: "Next.js",     src: "/images/next.png" },
  { name: "Python",      src: "/images/python.png" },
  { name: "Tailwind",    src: "/images/tailwind.png" },
  { name: "React",       src: "/images/react.png" },
  { name: "Supabase",    src: "/images/supabase.png" },
  { name: "HTML/CSS/JS", src: "/images/webdev.webp" },
  { name: "LangGraph",   src: "/images/langgraph.png" },
  { name: "FastAPI",     src: "/images/fastapi.png" },
  { name: "Docker",      src: "/images/docker.png" },
  { name: "n8n",         src: "/images/n8n.png" },
  { name: "MongoDB",     src: "/images/mongo.png" },
  { name: "Git",         src: "/images/git.png" },
  { name: "Playwright",  src: "/images/playwright.png" },
  { name: "PostgreSQL",  src: "/images/postgre.png" },
  { name: "Ubuntu",      src: "/images/ubuntu.png" },
  { name: "Node.js",     src: "/images/node.png" },
];

export const ToolKit = () => {
  return (
    <div id="toolkit" className="w-full flex flex-col items-center mb-20 mt-10">
      <h1 className="text-4xl mb-10">Toolkit</h1>

      <div className="w-full overflow-hidden">
        <div className="marquee-track flex gap-10">
          {[...logos, ...logos].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-[64px] h-[64px] flex items-center justify-center bg-white/10 rounded-xl p-2">
                <img src={item.src} alt={item.name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="text-xs text-gray-300 whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
