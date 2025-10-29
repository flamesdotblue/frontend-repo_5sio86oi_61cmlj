import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import { site } from "./content";
import { Rocket } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Rocket className="h-4 w-4" />
            </div>
            {site.shortName}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href={site.contact.whatsapp} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
              Get started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-10 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-900">LinkedIn</a>
          <a href={site.social.twitter} target="_blank" rel="noreferrer" className="hover:text-gray-900">Twitter/X</a>
          <a href={`mailto:${site.contact.email}`} className="hover:text-gray-900">Email</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
