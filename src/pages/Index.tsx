import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = ["About Us", "Articles & Stories", "Activities", "Fundraisers"];

const ARTICLES = [
  {
    tag: "Story",
    title: "Why We Started MOMS Club",
    desc: "A message from our founding members about why community matters more than ever.",
    date: "May 10, 2026",
  },
  {
    tag: "Article",
    title: "Building Bridges at Lunch",
    desc: "How sharing a meal every Thursday has helped students feel more seen and supported.",
    date: "Apr 28, 2026",
  },
  {
    tag: "Article",
    title: "What MOMS Stands For",
    desc: "The meaning behind our name and the values that guide everything we do.",
    date: "Apr 14, 2026",
  },
];

const ACTIVITIES = [
  {
    icon: "Users",
    title: "Weekly Lunch Meetups",
    desc: "Every Thursday during lunch in Portable 4. Open to everyone — no sign-up needed.",
  },
  {
    icon: "Heart",
    title: "Peer Support Circles",
    desc: "Small group conversations guided by student leaders to talk, share, and connect.",
  },
  {
    icon: "Star",
    title: "Community Projects",
    desc: "Seasonal projects that bring our school together and give back to the community.",
  },
  {
    icon: "BookOpen",
    title: "Guest Speaker Events",
    desc: "Inspiring talks from parents, alumni, and local figures who care about youth.",
  },
];

const FUNDRAISERS = [
  {
    title: "Spring Bake Sale",
    date: "May 22, 2026",
    goal: "New club supplies",
    status: "Upcoming",
  },
  {
    title: "Spirit Week Raffle",
    date: "Jun 5, 2026",
    goal: "End-of-year celebration",
    status: "Upcoming",
  },
  {
    title: "Winter Card Drive",
    date: "Dec 2025",
    goal: "Local shelter donation",
    status: "Completed",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(var(--school-blue))] flex items-center justify-center">
              <span className="text-white font-display font-black text-sm">M</span>
            </div>
            <span className="font-display font-bold text-[hsl(var(--school-blue))] text-lg tracking-tight">
              MOMS Club
            </span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="nav-link bg-transparent border-none cursor-pointer"
                onClick={() => scrollTo(link.toLowerCase().replace(/[^a-z]/g, "-"))}
              >
                {link}
              </button>
            ))}
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[hsl(var(--school-blue))]"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="nav-link text-left bg-transparent border-none cursor-pointer py-1"
                onClick={() => {
                  scrollTo(link.toLowerCase().replace(/[^a-z]/g, "-"));
                  setMenuOpen(false);
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[hsl(var(--school-blue))] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-[hsl(var(--school-gold))] text-xs font-bold uppercase tracking-widest mb-3 font-body">
            Welcome to
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-black leading-tight mb-4">
            MOMS Club
          </h1>
          <p className="text-blue-100 text-lg font-body font-normal max-w-xl mx-auto mb-8">
            A safe space where students come together, support each other, and build real community — one Thursday at a time.
          </p>
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--school-gold))] text-[hsl(var(--school-blue))] font-body font-bold px-5 py-2.5 rounded-md text-sm">
            <Icon name="MapPin" size={15} />
            Every Thursday · Lunch · Portable 4
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about-us" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="section-tag">About Us</span>
          <h2 className="text-3xl font-display font-bold text-[hsl(var(--school-blue))] mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
            MOMS Club is a student-led organization built around one simple idea: everyone deserves a place to belong. We meet every Thursday during lunch in Portable 4, and our door is always open — no sign-up, no pressure, just community.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
            We organize activities, share stories, and support one another through the everyday ups and downs of school life. Whether you're looking for friends, a safe space to talk, or just a good lunch crowd — MOMS Club is for you.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            {[
              { icon: "Calendar", label: "Every Thursday" },
              { icon: "Clock", label: "During Lunch" },
              { icon: "MapPin", label: "Portable 4" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-[hsl(var(--school-light))] border border-border px-4 py-2 rounded-md text-sm font-body font-medium text-[hsl(var(--school-blue))]"
              >
                <Icon name={icon} size={15} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-border max-w-5xl mx-auto" />

      {/* ARTICLES & STORIES */}
      <section id="articles---stories" className="py-20 px-6 bg-[hsl(var(--school-light))]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 animate-fade-up">
            <span className="section-tag">Articles & Stories</span>
            <h2 className="text-3xl font-display font-bold text-[hsl(var(--school-blue))]">
              From Our Members
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <div
                key={a.title}
                className={`bg-white rounded-lg border border-border p-6 card-hover animate-fade-up delay-${(i + 1) * 100}`}
              >
                <span className="section-tag">{a.tag}</span>
                <h3 className="font-display font-bold text-[hsl(var(--school-blue))] text-lg mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {a.desc}
                </p>
                <p className="text-xs font-body text-muted-foreground">{a.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 animate-fade-up">
            <span className="section-tag">Activities</span>
            <h2 className="text-3xl font-display font-bold text-[hsl(var(--school-blue))]">
              What We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ACTIVITIES.map((act, i) => (
              <div
                key={act.title}
                className={`flex gap-4 p-5 rounded-lg border border-border card-hover animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-md bg-[hsl(var(--school-blue))] flex items-center justify-center">
                  <Icon name={act.icon} size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[hsl(var(--school-blue))] text-base mb-1">
                    {act.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-border max-w-5xl mx-auto" />

      {/* FUNDRAISERS */}
      <section id="fundraisers" className="py-20 px-6 bg-[hsl(var(--school-light))]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 animate-fade-up">
            <span className="section-tag">Fundraisers</span>
            <h2 className="text-3xl font-display font-bold text-[hsl(var(--school-blue))]">
              Our Fundraisers
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {FUNDRAISERS.map((f, i) => (
              <div
                key={f.title}
                className={`bg-white rounded-lg border border-border px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 card-hover animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div>
                  <h3 className="font-display font-bold text-[hsl(var(--school-blue))] text-base mb-0.5">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Goal: {f.goal}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-sm font-body text-muted-foreground">{f.date}</span>
                  <span
                    className={`text-xs font-bold font-body px-3 py-1 rounded-full ${
                      f.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-[hsl(var(--school-gold))]/20 text-[hsl(38,70%,35%)]"
                    }`}
                  >
                    {f.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--school-blue))] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="font-display font-black text-white text-xs">M</span>
            </div>
            <span className="font-bold text-white">MOMS Club</span>
          </div>
          <p className="text-blue-200 text-center">
            Every Thursday during lunch · Portable 4
          </p>
          <p className="text-blue-300 text-xs">© 2026 MOMS Club</p>
        </div>
      </footer>
    </div>
  );
}
