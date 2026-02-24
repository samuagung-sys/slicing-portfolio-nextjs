type TestimonialCardProps = {
  name: string
  role: string
  avatar: string
  quote: string
  highlight?: boolean
}

export default function TestimonialCard({
  name,
  role,
  avatar,
  quote,
  highlight = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`
        group rounded-2xl border p-5 backdrop-blur transition-all duration-300
        hover:-translate-y-0.5 hover:border-white/20
        ${
          highlight
            ? "border-fuchsia-500/30 bg-white/5 shadow-[0_0_35px_rgba(168,85,247,0.22)]"
            : "border-white/10 bg-white/4"
        }
      `}
    >
      {/* Top */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
        />

        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/60">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm leading-relaxed text-white/70">
        “{quote}”
      </p>
    </div>
  )
}