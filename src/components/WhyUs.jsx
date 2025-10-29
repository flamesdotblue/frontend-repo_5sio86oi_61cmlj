import { ShieldCheck, HeartHandshake, Star } from "lucide-react";
import { site } from "../content";

export default function WhyUs() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {site.whyUs.label}
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              We're new as a brand and building our first client stories. That means early partners get
              extraordinary focus and founder-level attention.
            </p>
          </div>
          <div className="grid gap-4">
            {site.whyUs.bullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 text-indigo-600" />
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-indigo-700">
            <Star className="h-4 w-4" /> Early partner pricing available
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-emerald-700">
            <HeartHandshake className="h-4 w-4" /> Open to pilot projects and trials
          </div>
        </div>
      </div>
    </section>
  );
}
