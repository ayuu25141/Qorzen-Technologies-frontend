import React from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Braces, 
  BrainCircuit, 
  Cloud, 
  GraduationCap, 
  Sparkles, 
} from "lucide-react";

// Fixed unique, context-matching icons for a premium look
const services = [
  { name: "Web Design & Development", icon: Code2 },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Cyber Security", icon: Server },
  { name: "Software Development", icon: Braces },
  { name: "AI & Automation", icon: BrainCircuit },
  { name: "Data Analysis & Data Science", icon: Database },
  { name: "Networking & IT Infrastructure", icon: Server },
  { name: "Web Development", icon: Globe },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "Career-Focused Training", icon: GraduationCap },
];

function Marquservice() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50/50 py-10">
      {/* Top / Bottom Premium Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      {/* Heading */}
      <div className="relative z-10 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-800">
          What We Help You Master
        </p>
      </div>

      {/* Left Fade (Smooth white transparency) */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />

      {/* Right Fade (Smooth white transparency) */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent" />

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee gap-4 px-2">
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 rounded-full border border-slate-200/60 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:border-indigo-400/50 hover:bg-indigo-50/30 hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-indigo-100 group-hover:text-indigo-700">
                  <Icon size={15} />
                </div>

                {/* Text */}
                <span className="whitespace-nowrap text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-slate-900">
                  {service.name}
                </span>

                {/* Small Spark */}
                <Sparkles size={12} className="text-violet-400/70 transition-transform duration-300 group-hover:rotate-12" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Marquservice;
