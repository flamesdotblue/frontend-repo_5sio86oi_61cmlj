import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { site } from "../content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 via-violet-600 to-fuchsia-600 opacity-90" />
      <div className="absolute -top-48 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur"
        >
          <Rocket className="h-4 w-4" />
          <span>Introducing {site.shortName} — a fresh studio with seasoned talent</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-lg text-white/90 md:text-2xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-white/90"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href={site.hero.primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow hover:bg-white/90"
          >
            {site.hero.primaryCtaText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.hero.secondaryCtaHref}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white shadow hover:bg-white/20"
          >
            {site.hero.secondaryCtaText}
          </a>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 grid gap-3 text-sm text-white/90 md:grid-cols-3"
        >
          {site.highlights.map((h) => (
            <motion.li
              key={h}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3"
            >
              {h}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
