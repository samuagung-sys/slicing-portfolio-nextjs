"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="bg-[#0B0B0F] px-4 py-20">
      <div className="mx-auto max-w-md md:max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Contact Me
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Let’s build something great together
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="mb-3 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="mb-3 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={4}
              className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            />

            <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 py-3 text-sm font-semibold text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}