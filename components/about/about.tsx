import AboutCard from "./AboutCard"
import Reveal from "@/components/ui/Reveal"

export default function About() {
  return (
    <section className="bg-[#0B0B0F] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-md md:max-w-6xl">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
            About Me
          </h2>
        </Reveal>
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          I am a Front-End Developer and Web Programming Instructor
          passionate about building modern, responsive, and user-friendly
          web applications. I focus on clean code, performance, and great UX.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <AboutCard value="3+" label="Years Experience" highlight />
          <AboutCard value="30+" label="Projects Done" />
          <AboutCard value="10+" label="Happy Clients" />
          <AboutCard value="20+" label="Students Mentored" highlight />
        </div>
      </div>
    </section>
  )
}