export const Home = () => {
  return (
    <div className="px-[10%] py-20 w-full flex flex-col items-center text-center" id="about">
      <img
        src="/images/profile_pic.webp"
        alt="Brent Orgen"
        className="w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] rounded-full mb-8 object-cover"
      />

      <h1 className="text-[200%] lg:text-[380%] mb-2">
        <span className="whitespace-nowrap"><span className="inline-block squish-letter">B</span>rent</span>{' '}
        <span className="whitespace-nowrap"><span className="inline-block squish-letter" style={{ animationDelay: '0.4s' }}>O</span>rgen</span>
      </h1>

      <p className="text-primary text-lg lg:text-2xl mb-6 tracking-wide">
        Full-Stack Developer &amp; Automation Builder
      </p>

      <p className="max-w-xl lg:max-w-2xl text-sm lg:text-lg text-gray-300 mb-8 leading-relaxed">
        I build web apps and automation systems — from client-facing websites to
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
