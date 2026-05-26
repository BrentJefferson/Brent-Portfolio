export const Home = () => {
  return (
    <div className="px-[10%] py-20 w-full flex flex-col items-center text-center" id="about">

      {/* Brent | photo | Orgen row on all screen sizes */}
      <div className="flex flex-row items-center gap-4 lg:gap-8 mb-4">

        <h1 className="text-[130%] lg:text-[380%]">
          <span className="whitespace-nowrap">
            <span className="inline-block squish-letter">B</span>rent
          </span>
        </h1>

        <img
          src="/images/profile_pic.webp"
          alt="Brent Orgen"
          className="w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] rounded-full object-cover flex-shrink-0"
        />

        <h1 className="text-[130%] lg:text-[380%]">
          <span className="whitespace-nowrap">
            <span className="inline-block squish-letter" style={{ animationDelay: '0.4s' }}>O</span>rgen
          </span>
        </h1>
      </div>

      <p className="text-primary text-lg lg:text-2xl mb-6 tracking-wide">
        Full-Stack Developer &amp; Automation Builder
      </p>

      <p className="max-w-xl lg:max-w-2xl text-sm lg:text-lg text-gray-300 mb-8 leading-relaxed">
        I build web apps and automation systems, from client-facing websites to
        AI-powered workflow tools. I work independently or with a team and care
        about shipping things that actually work.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 text-sm lg:text-base mb-10">
        <span className="px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 text-white">React &amp; Next.js</span>
        <span className="px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 text-white">Python &amp; FastAPI</span>
        <span className="px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-white/10 text-white">n8n &amp; LangGraph</span>
      </div>

      <a
        href="#projects"
        className="border-0 px-6 py-3 lg:px-8 lg:py-4 lg:text-base rounded-full bg-primary/20 hover:bg-primary/40 text-white text-sm transition-all"
      >
        See my work ↓
      </a>
    </div>
  );
};
