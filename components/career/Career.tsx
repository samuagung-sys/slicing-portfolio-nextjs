import TimelineItem from "./TimelineItem"

export default function Career() {
  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md md:max-w-6xl md:max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Career Journey
          </h2>
          <p className="mt-2 text-sm text-white/60">
            My professional timeline
          </p>
        </div>

        <div className="relative mt-12 space-y-10 md:space-y-12">
          <div className="absolute left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <TimelineItem
            title="Front-End Developer"
            company="Freelance"
            period="2023 — Present"
            description="Building responsive and modern web applications using React, Next.js, and Tailwind CSS."
          />

          <TimelineItem
            title="Web Programming Instructor"
            company="Coding Bootcamp"
            period="2022 — Present"
            description="Mentoring students in modern web development and helping them build real-world projects."
          />

          <TimelineItem
            title="Junior Web Developer"
            company="Startup Company"
            period="2021 — 2022"
            description="Worked on UI implementation, bug fixing, and improving website performance."
          />
        </div>
      </div>
    </section>
  )
}