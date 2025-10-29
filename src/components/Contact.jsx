import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { site } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let's build something great</h2>
          <p className="mt-3 text-white/80">
            Tell us about your idea or the role you're hiring for. We'll reply within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-300" />
                <a href={`mailto:${site.contact.email}`} className="hover:underline">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-300" />
                <a href={`tel:${site.contact.phone}`} className="hover:underline">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-300" />
                <span>{site.contact.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.contact.whatsapp}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-emerald-950 shadow hover:bg-emerald-400"
                rel="noreferrer"
              >
                WhatsApp us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-slate-900 shadow hover:bg-white/90"
              >
                Email us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form
            action={`mailto:${site.contact.email}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-white/10 bg-white p-6 text-slate-900 shadow"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Your name</label>
                <input type="text" name="name" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">How can we help?</label>
                <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white hover:bg-indigo-500"
            >
              Send message
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          No past clients yet — your project could be our first flagship case study. Let's make it remarkable.
        </p>
      </div>
    </section>
  );
}
