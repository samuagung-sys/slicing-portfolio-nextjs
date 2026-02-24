type ProjectCardProps = {
  title: string
  description: string
  image: string
  tech: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur transition-all duration-300 hover:border-white/20">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-white/70">{description}</p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}