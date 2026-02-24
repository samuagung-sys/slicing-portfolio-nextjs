type AboutCardProps = {
  value: string
  label: string
  highlight?: boolean
}

export default function AboutCard({
  value,
  label,
  highlight = false,
}: AboutCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`
          relative flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-full
          transition-all duration-300
          ${
            highlight
              ? "bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-[0_0_45px_rgba(168,85,247,0.35)]"
              : "bg-white/[0.04] border border-white/10"
          }
        `}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />

        <span className="relative text-2xl font-bold text-white">
          {value}
        </span>
      </div>

      <p className="mt-4 text-sm text-white/70">{label}</p>
    </div>
  )
}