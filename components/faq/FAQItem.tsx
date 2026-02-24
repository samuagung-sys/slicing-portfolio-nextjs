type FAQItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div
      className={`
        group rounded-xl border backdrop-blur transition-all duration-300
        ${
          isOpen
            ? "border-fuchsia-500/30 bg-white/5 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            : "border-white/10 bg-white/4 hover:border-white/20"
        }
      `}
    >
      {/* Button */}
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span className="text-sm font-medium text-white">
          {question}
        </span>

        {/* Icon */}
        <span
          className={`
            flex h-6 w-6 items-center justify-center rounded-full
            border border-white/15 text-sm text-white/70
            transition-all duration-300
            ${isOpen ? "rotate-45 border-fuchsia-400/40 text-white" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* Content */}
      <div
        className={`
          grid transition-all duration-300
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm leading-relaxed text-white/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}