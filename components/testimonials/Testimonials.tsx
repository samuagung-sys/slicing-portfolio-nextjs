import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md md:max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Why People Say About Me
          </h2>
          <p className="mt-2 text-sm text-white/60">
            Feedback from clients and students
          </p>
        </div>

        <div className="mt-12 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          <TestimonialCard
            name="Michael Chen"
            role="Startup Founder"
            avatar="https://i.pravatar.cc/100?img=12"
            quote="Agung delivered our project with excellent quality and great communication throughout the process."
            highlight
          />

          <TestimonialCard
            name="Sarah Johnson"
            role="Bootcamp Student"
            avatar="https://i.pravatar.cc/100?img=32"
            quote="His teaching style is clear and practical. I finally understand modern React thanks to him."
          />

          <TestimonialCard
            name="David Lee"
            role="Product Manager"
            avatar="https://i.pravatar.cc/100?img=56"
            quote="Professional, fast, and detail-oriented. Highly recommended for frontend work."
          />
        </div>
      </div>
    </section>
  )
}