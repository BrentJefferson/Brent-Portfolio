const groups = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js",     src: "/images/next.png" },
      { name: "React",       src: "/images/react.png" },
      { name: "Tailwind",    src: "/images/tailwind.png" },
      { name: "HTML/CSS/JS", src: "/images/webdev.webp" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Python",     src: "/images/python.png" },
      { name: "FastAPI",    src: "/images/fastapi.png" },
      { name: "Node.js",    src: "/images/node.png" },
      { name: "Supabase",   src: "/images/supabase.png" },
      { name: "PostgreSQL", src: "/images/postgre.png" },
      { name: "MongoDB",    src: "/images/mongo.png" },
    ],
  },
  {
    label: "Automation & AI",
    items: [
      { name: "LangGraph",  src: "/images/langgraph.png" },
      { name: "n8n",        src: "/images/n8n.png" },
      { name: "Playwright", src: "/images/playwright.png" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker", src: "/images/docker.png" },
      { name: "Git",    src: "/images/git.png" },
      { name: "Ubuntu", src: "/images/ubuntu.png" },
    ],
  },
];

export const ToolKit = () => {
  let globalIndex = 0;

  return (
    <div id="toolkit" className="w-full flex flex-col items-center mb-20 mt-10 lg:px-[20%] px-[5%]">
      <h1 className="text-4xl lg:text-5xl mb-10"><span className="inline-block spin-t">T</span>oolkit</h1>

      <div className="w-full flex flex-col gap-10 lg:gap-14 items-center text-center">
        {groups.map((group) => (
          <div key={group.label} className="w-full">
            <p className="text-xs lg:text-sm uppercase tracking-widest text-gray-400 mb-4">{group.label}</p>
            <div className="flex flex-row flex-wrap gap-3 lg:gap-5 justify-center">
              {group.items.map((item) => {
                const delay = `${(globalIndex++ * 0.3) % 3}s`;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-2 lg:px-6 lg:py-4 bg-white/10 rounded-xl toolkit-pill"
                    style={{ animationDelay: delay }}
                  >
                    <img src={item.src} alt={item.name} className="w-5 h-5 lg:w-10 lg:h-10 object-contain" />
                    <span className="text-sm lg:text-xl text-white">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
