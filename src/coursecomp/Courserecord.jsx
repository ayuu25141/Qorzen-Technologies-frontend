import React from "react";
import CountUp from "../Component/CountUp";
import {
  BookOpen,
  Layers,
  Users,
  FolderKanban,
} from "lucide-react";
function Courserecord() {
const records = [
  {
    icon: BookOpen,
    value: 50,
    suffix: "+",
    title: "Courses",
    description: "Practical courses across 6+ categories",
  },
  {
    icon: Layers,
    value: 6,
    suffix: "+",
    title: "Learning Categories",
    description: "Technology paths built for every level",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Learners",
    description: "Students building skills with us",
  },
  {
    icon: FolderKanban,
    value: 100,
    suffix: "+",
    title: "Projects & Lessons",
    description: "Hands-on learning beyond theory",
  },
];

  return (
    <section className="relative mt-16 overflow-hidden bg-slate-50/50 py-24">
      {/* Premium Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/5 to-violet-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500">
            Our Numbers
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Built on{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trust & Results.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base">
            A growing community of learners, clients, and digital products
            built through practical expertise and meaningful partnerships.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {records.map((record) => {
            const Icon = record.icon;

            return (
              <div
                key={record.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/60
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:border-indigo-200
                  hover:shadow-xl
                  hover:shadow-indigo-500/[0.03]
                "
              >
                {/* Premium Hover Radial Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-gradient-to-br
                    from-indigo-500/10
                    to-violet-500/10
                    blur-2xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon Container */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-indigo-100
                    bg-indigo-50/50
                    text-indigo-600
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:border-indigo-200
                    group-hover:bg-indigo-50
                  "
                >
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Number */}
                <div className="relative mt-6 flex items-baseline">
                  <span className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                    <CountUp
                      from={0}
                      to={record.value}
                      duration={3}
                    />
                  </span>

                  <span className="ml-1 text-2xl font-bold text-indigo-600">
                    {record.suffix}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-3 text-base font-bold text-slate-800 transition-colors duration-300 group-hover:text-slate-900">
                  {record.title}
                </h3>

                {/* Description */}
              <p className="mt-2 whitespace-nowrap text-xs text-gray-500">
  {record.description}
</p>

                {/* Divider Line */}
                <div className="mt-5 h-px w-full bg-slate-100" />

                {/* Live Indicator Status */}
                <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Growing every day
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courserecord;
