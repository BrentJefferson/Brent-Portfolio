import { ProjectCard } from "../components/projectcard"

export const Projects = () => {

  const projects = [
    {
  link: "https://elitecraftv2.vercel.app/",
  name: "EliteCraft Education Corp Website",
  description: "Built a full marketing site for a TESDA & FOA-accredited fiber optics training center in Cebu. Features a course catalog, live schedule, testimonials, and a custom admin dashboard for managing courses, sessions, and event photos.",
  imagesrc: "/images/project/elitecraft.png",
  stack: ["Next.js", "React", "TypeScript"]
}
    ,
    {
      link: "https://magymbio-web.vercel.app/",
      name: "Magymbo Gym Website",
      description: "Built a full website for a gym client. Members can check their membership status, and the owner manages everything through a custom admin dashboard.",
      imagesrc: "/images/project/Magymbo.JPG",
      stack: ["Next.js", "React", "Supabase"]
    },
    {
      link: "https://a-p-panels.vercel.app",
      name: "A.P Panels Portfolio",
      description: "Designed and delivered a portfolio site for a panel manufacturing company. Clean, professional, and built to turn visitors into leads.",
      imagesrc: "/images/project/AP.JPG",
      stack: ["Vite + React", "Tailwind"]
    },
    {
      link: "https://drive.google.com/file/d/1U_aAQ5JyWKOBLmPrs9kvZ5xnqDWNSSXE/view?usp=sharing",
      name: "ENAR: Desktop Automation Tool",
      description: "A desktop app that lets you automate repetitive GUI tasks using natural language. An AI agent translates your instructions into mouse and keyboard actions via PyAutoGUI. Currently in active development.",
      imagesrc: "/images/project/ENAR.JPG",
      stack: ["Python", "Electron", "Vite + React", "Tailwind", "FastAPI", "LangGraph"]
    },
    {
      link: null,
      name: "Moodle Quiz Automation",
      description: "A browser automation pipeline that scrapes quiz content from Moodle, queries an AI for answers, and submits them automatically. Full end-to-end: scraping, AI reasoning, and browser control.",
      imagesrc: "/images/project/n8n.png",
      stack: ["n8n", "Python", "LangGraph", "MongoDB", "Docker"]
    }
  ];

  return (
    <>
      <div id="projects" className="w-full flex flex-col items-center mb-5 mt-10">
        <h1 className="text-4xl"><span className="inline-block jump-p">P</span>rojects</h1>
      </div>
      {projects.map((item, index) => (
        <div key={index}>
          <ProjectCard projects={item} />
        </div>
      ))}
    </>
  );
};
