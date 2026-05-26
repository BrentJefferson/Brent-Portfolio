export const Home = () => {
  return (
    <div className="px-[10%] py-24 lg:py-32 w-full flex flex-col items-center text-center" id="about">

      {/* Mobile: photo then name below / PC: Brent | photo | Orgen row */}

      {/* PC row */}
      <div className="hidden lg:flex flex-row items-center gap-8 mb-4">
        <h1 className="text-[380%]">
          <span className="whitespace-nowrap"><span className="inline-block squish-letter">B</span>rent</span>
        </h1>
        <img
          src="/images/profile_pic.webp"
          alt="Brent Orgen"
          className="w-[240px] h-[240px] rounded-full object-cover"
        />
        <h1 className="text-[380%]">
          <span className="whitespace-nowrap"><span className="inline-block squish-letter" style={{ animationDelay: '0.4s' }}>O</span>rgen</span>
        </h1>
      </div>

      {/* Mobile: photo on top, name on one line below */}
      <div className="flex lg:hidden flex-col items-center gap-4 mb-4">
        <img
          src="/images/profile_pic.webp"
          alt="Brent Orgen"
          className="w-[180px] h-[180px] rounded-full object-cover"
        />
        <h1 className="text-3xl whitespace-nowrap">
          <span className="inline-block squish-letter">B</span>rent{' '}
          <span className="inline-block squish-letter" style={{ animationDelay: '0.4s' }}>O</span>rgen
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

      <a
        href="#projects"
        className="group border-0 flex items-center gap-2 px-8 py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-white/10"
      >
        See my work
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};
