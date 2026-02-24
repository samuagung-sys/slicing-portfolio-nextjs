import Reveal from "@/components/ui/Reveal"
export default function Hero() {
  return (
    <section className="bg-[#0B0B0F] px-4 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-md md:max-w-5xl lg:max-w-6xl">
        {/* TEXT */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
            👋 Agung’s Portfolio
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            <Reveal>
              <span className="block">Welcome to My Portfolio</span>
            </Reveal>
            I am a{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
              Front-End Developer
            </span>{" "}
            & Web Programming Instructor
          </h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 md:text-base">
              Hi, I’m Agung, a passionate web developer with over 3 years of
              experience in crafting responsive websites and engaging user
              experiences.
            </p>
          </Reveal>

          <button className="mt-6 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            View My Portfolio
          </button>
        </div>

        {/* IMAGE*/}
        <div className="mt-12 md:mt-16">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-fuchsia-500/40 p-[2px]">
            <div className="overflow-hidden rounded-2xl">
              <Reveal delay={0.2}>
                <img
                  src="/images/hero-person.png"
                  alt="hero"
                  className="h-auto w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
