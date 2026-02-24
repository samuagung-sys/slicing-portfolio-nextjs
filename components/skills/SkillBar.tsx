type SkillBarProps = {
  name: string
  percent: number
}

export default function SkillBar({ name, percent }: SkillBarProps) {
  return (
    <div className="space-y-2">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-white/60">{percent}%</span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
        {/* subtle inner line */}
        <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />

        {/* Fill */}
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 shadow-[0_0_12px_rgba(168,85,247,0.45)] transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}