import { Code2, Smartphone, Users, CheckCircle } from "lucide-react";
import { site } from "../content";

const iconMap = { Code2, Smartphone, Users };

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Services tailored for early-stage teams
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            From idea to launch, engineering to hiring — we partner end-to-end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {site.services.map((s) => {
            const Icon = iconMap[s.icon] || Code2;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-600/10 p-3 text-indigo-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-gray-600">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
