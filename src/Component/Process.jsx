"use client";
import {
  MessageSquare,
  ClipboardList,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
} from "lucide-react";
import React, { memo, useCallback, useState } from "react";
const ChevronDown = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;
const ChevronUp = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>;

const Badge = ({
  children,
  className = "",
  ...props
}) => <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${className}`} {...props}>
    {children}
  </span>;
const timelineData = [
  {
    id: "process-item-1",
    title: "Discovery & Consultation",
    type: "01 — Understand",
    duration: "Define the Vision",
    icon: MessageSquare,
    responsibilities: [
      "Understand the client's business, goals, target audience, and product vision.",
      "Identify core requirements, challenges, and the problems the product needs to solve.",
      "Discuss project scope, priorities, timeline, and expected outcomes.",
      "Turn initial ideas into a clear and actionable project direction.",
    ],
    skills: [
      "Requirement Analysis",
      "Client Consultation",
      "Business Understanding",
      "Project Scope",
    ],
  },

  {
    id: "process-item-2",
    title: "Strategy & Planning",
    type: "02 — Plan",
    duration: "Build the Blueprint",
    icon: ClipboardList,
    responsibilities: [
      "Break the product vision into clear features, milestones, and deliverables.",
      "Define the technical architecture and choose the right technologies.",
      "Plan user flows, system structure, database requirements, and integrations.",
      "Create a realistic development roadmap focused on quality and scalability.",
    ],
    skills: [
      "Product Strategy",
      "Technical Planning",
      "Architecture",
      "Roadmapping",
    ],
  },

  {
    id: "process-item-3",
    title: "UX/UI Design",
    type: "03 — Design",
    duration: "Shape the Experience",
    icon: Palette,
    responsibilities: [
      "Transform requirements into intuitive user journeys and interfaces.",
      "Create wireframes and high-fidelity designs aligned with the product goals.",
      "Establish a consistent visual system, typography, spacing, and component patterns.",
      "Review designs with the client and refine the experience before development.",
    ],
    skills: [
      "UX Research",
      "UI Design",
      "Wireframing",
      "Design Systems",
      "Prototyping",
    ],
  },

  {
    id: "process-item-4",
    title: "Product Development",
    type: "04 — Build",
    duration: "Turn Design Into Reality",
    icon: Code,
    responsibilities: [
      "Build the product using clean, maintainable, and scalable code.",
      "Develop responsive interfaces and robust backend functionality.",
      "Integrate APIs, databases, authentication, payments, and third-party services where required.",
      "Keep development aligned with the approved designs and project roadmap.",
    ],
    skills: [
      "Frontend",
      "Backend",
      "APIs",
      "Database",
      "Cloud",
      "Scalable Architecture",
    ],
  },

  {
    id: "process-item-5",
    title: "Testing & Quality Assurance",
    type: "05 — Refine",
    duration: "Make It Reliable",
    icon: ShieldCheck,
    responsibilities: [
      "Test features across devices, browsers, and real-world usage scenarios.",
      "Identify and resolve functional, visual, performance, and usability issues.",
      "Validate integrations, security, responsiveness, and overall product stability.",
      "Perform final quality checks before the product is released.",
    ],
    skills: [
      "QA Testing",
      "Bug Fixing",
      "Performance",
      "Security",
      "Cross-Browser Testing",
    ],
  },

  {
    id: "process-item-6",
    title: "Launch & Deployment",
    type: "06 — Launch",
    duration: "Go Live",
    icon: Rocket,
    responsibilities: [
      "Prepare the production environment and deployment infrastructure.",
      "Configure domains, hosting, databases, environment variables, and required services.",
      "Deploy the product and verify everything works correctly in production.",
      "Monitor the initial release and resolve any launch-related issues quickly.",
    ],
    skills: [
      "Deployment",
      "Cloud Hosting",
      "CI/CD",
      "Production Setup",
      "Monitoring",
    ],
  },

  {
    id: "process-item-7",
    title: "Continuous Support",
    type: "07 — Grow",
    duration: "Beyond Launch",
    icon: Headphones,
    responsibilities: [
      "Provide ongoing technical support and maintenance after launch.",
      "Monitor performance and address production issues when they arise.",
      "Improve existing features based on user feedback and business needs.",
      "Help evolve the product as requirements and opportunities grow.",
    ],
    skills: [
      "Maintenance",
      "Monitoring",
      "Optimization",
      "Feature Improvements",
      "Technical Support",
    ],
  },
];
const TimelineItemContent = memo(function TimelineItemContent({
  item
}) {
  return <div className="mt-6 space-y-4">
      {}
      <ul className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => <li key={`${item.id}-resp-${idx}`} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-400">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{responsibility}</span>
          </li>)}
      </ul>

      {}
      <div className="flex flex-wrap gap-2 pt-2">
        {item.skills.map((skill, skillIdx) => <Badge key={`${item.id}-skill-${skillIdx}`} className="bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors px-3 py-1">
            {skill}
          </Badge>)}
      </div>
    </div>;
});
TimelineItemContent.displayName = "TimelineItemContent";
const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle
}) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;
  return <li className="relative">
      {}
      <div className="absolute left-1 top-5 w-6 h-6 bg-slate-400 dark:bg-slate-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-white dark:text-black" />
      </div>

      {}
      <div className="ml-14  pb-8">
        <div className="bg-white rounded-lg p-4 border mt-15 border-slate-200/80 dark:border-gray-800/50 transition-all duration-200">
          <button id={headerId} className="w-full text-left group cursor-pointer" onClick={() => onToggle(item.id)} aria-expanded={expanded} aria-controls={contentId}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span>{item.type}</span>
                  <span aria-hidden>•</span>
                  <span>{item.duration}</span>
                </div>
              </div>

              <div className="text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>
          </button>

          {expanded && <div id={contentId} role="region" aria-labelledby={headerId}>
              <TimelineItemContent item={item} />
            </div>}
        </div>
      </div>
    </li>;
});
TimelineItem.displayName = "TimelineItem";
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi"
}) {
  const initial = defaultExpandedIds ?? data.map(d => d.id);
  const [expanded, setExpanded] = useState(() => new Set(initial));
  const onToggle = useCallback(id => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (expandMode === "single") {
        return prev.has(id) ? new Set() : new Set([id]);
      }
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, [expandMode]);
  return <ol className="relative">
      {}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-300 dark:bg-white" aria-hidden />

      {data.map(item => <TimelineItem key={item.id} item={item} expanded={expanded.has(item.id)} onToggle={onToggle} />)}
    </ol>;
}
export default function Pro() {
  return <div className="bg-white dark:bg-white min-h-screen p-4 sm:p-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
     <div className="mx-auto max-w-3xl text-center">

  <span className="text-xl font-semibold uppercase tracking-[0.3em] bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
    How We Work
  </span>

  <h2 className="mt-5 text-4xl font-extrabold tracking-tight       text-[#353243]
 sm:text-5xl lg:text-6xl">
    Your Vision. Our Process.
    <br />
    <span className="bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
      One Powerful Product.
    </span>
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-800 sm:text-lg">
    A thoughtful, transparent process that turns your vision into a
    polished digital product — from discovery and design to development,
    testing, and launch.
  </p>

</div>

        {}
        <ProfessionalTimeline  data={timelineData} expandMode="multi" />
      </div>
    </div>;
}