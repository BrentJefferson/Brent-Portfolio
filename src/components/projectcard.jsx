export const ProjectCard = ({ projects }) => {
  return (
    <div className="relative flex flex-row gap-5 items-center flex-wrap-reverse lg:px-[20%] px-[5%] w-full mb-5
      bg-gradient-to-r from-transparent via-neutral-900/30 to-transparent py-5">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <img src={projects.imagesrc} alt={projects.name} className="w-[200px] h-[120px] object-cover rounded-md" />

      <div className="lg:max-w-[80%] lg:w-[70%] w-[80%] max-w-[98%]">
        <p className="font-bold text-xl text-white mb-1">{projects.name}</p>
        <p className="lg:text-base text-sm text-gray-300 mb-3">{projects.description}</p>

        <div className="flex flex-row flex-wrap gap-1 mb-3">
          {projects.stack.map((item, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full text-white">{item}</span>
          ))}
        </div>

        {projects.link && (
          <button
            onClick={() => window.open(projects.link, "_blank")}
            className="text-xs px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
          >
            View Project →
          </button>
        )}
      </div>
    </div>
  );
};
