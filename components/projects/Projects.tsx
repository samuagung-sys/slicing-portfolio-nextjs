import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md md:max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Projects
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Some of my recent work
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <ProjectCard
            title="Portfolio Website"
            description="Modern personal portfolio built with Next.js and Tailwind CSS."
            image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop"
            tech={["Next.js", "TypeScript", "Tailwind"]}
          />

          <ProjectCard
            title="Landing Page SaaS"
            description="High-converting SaaS landing page with responsive design."
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
            tech={["React", "Tailwind", "Framer Motion"]}
          />
        </div>
      </div>
    </section>
  )
}