type TimelineItemProps = {
  title: string
  company: string
  period: string
  description: string
}

export default function TimelineItem({
  title,
  company,
  period,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-11">
      {/* Dot */}
      <span className="absolute left-[5px] top-3 h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />

      {/* Card */}
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-white/20">
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        <p className="mt-1 text-xs text-white/60">
          {company} • {period}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </div>
  )
}