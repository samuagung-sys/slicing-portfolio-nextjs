import SkillBar from "./SkillBar"

export default function Skills() {
  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            My Core Skills
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Technologies I work with
          </p>
        </div>

        {/* Skills list */}
        <div className="mx-auto max-w-md md:max-w-4xl">
          <SkillBar name="HTML & CSS" percent={95} />
          <SkillBar name="JavaScript" percent={90} />
          <SkillBar name="React / Next.js" percent={88} />
          <SkillBar name="TypeScript" percent={85} />
          <SkillBar name="Tailwind CSS" percent={92} />
        </div>
      </div>
    </section>
  )
}