export const ProjectCard = ({ projects }) => {
  return (
    <div className="relative w-full lg:px-[20%] px-[5%] mb-5">
      <div
        className="relative overflow-hidden rounded-2xl group cursor-pointer"
        onClick={() => projects.link && window.open(projects.link, "_blank")}
      >
        {/* Image */}
        <img
          src={projects.imagesrc}
          alt={projects.name}
          className="w-full h-[360px] lg:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h2 className="text-white font-bold text-lg mb-1 leading-snug">{projects.name}</h2>
          <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-3">{projects.description}</p>

          <div className="flex flex-row flex-wrap gap-1 mb-3">
            {projects.stack.map((item, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>

          {projects.link && (
            <span className="text-xs text-indigo-300 group-hover:text-indigo-200 transition-colors">
              View Project →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
