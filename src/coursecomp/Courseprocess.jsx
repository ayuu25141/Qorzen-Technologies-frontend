"use client";
import {
  MessageSquare,
  ClipboardList,
  Palette,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
  Compass,
  BookOpen,
  Dumbbell,
  ClipboardCheck,
  BriefcaseBusiness
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
    id: "learning-item-1",
    title: "Choose Your Learning Path",
    type: "01 — Discover",
    duration: "Find the Right Direction",
    icon: Compass,
    responsibilities: [
      "Explore technical, non-technical, and AI-focused learning programs.",
      "Choose a course based on your career goals, interests, and current skill level.",
      "Understand the technologies, tools, and practical skills covered in the program.",
      "Get a clear learning direction before you begin your training.",
    ],
    skills: [
      "Career Direction",
      "Course Selection",
      "Skill Assessment",
      "Learning Goals",
    ],
  },

  {
    id: "learning-item-2",
    title: "Start Your Training",
    type: "02 — Learn",
    duration: "Build the Foundation",
    icon: BookOpen,
    responsibilities: [
      "Learn concepts through structured and easy-to-follow training.",
      "Understand the fundamentals before moving into advanced topics.",
      "Follow a practical curriculum designed around relevant industry skills.",
      "Build a strong foundation with guided learning and instructor support.",
    ],
    skills: [
      "Fundamentals",
      "Structured Learning",
      "Industry Skills",
      "Expert Guidance",
    ],
  },

  {
    id: "learning-item-3",
    title: "Learn by Practicing",
    type: "03 — Practice",
    duration: "Turn Knowledge Into Skills",
    icon: Dumbbell,
    responsibilities: [
      "Practice concepts through exercises, challenges, and hands-on activities.",
      "Work with the same tools and technologies used in real-world environments.",
      "Solve practical problems to improve your understanding and confidence.",
      "Receive guidance when you get stuck and continuously improve your skills.",
    ],
    skills: [
      "Hands-On Practice",
      "Problem Solving",
      "Technical Skills",
      "Tool Mastery",
    ],
  },

  {
    id: "learning-item-4",
    title: "Build Real Projects",
    type: "04 — Build",
    duration: "Create Something Real",
    icon: Code,
    responsibilities: [
      "Apply your knowledge by building practical, real-world projects.",
      "Work through real development workflows instead of learning only through theory.",
      "Build projects that demonstrate your understanding of the technology.",
      "Develop the confidence to create and explain your own work.",
    ],
    skills: [
      "Real Projects",
      "Implementation",
      "Development",
      "Problem Solving",
      "Portfolio",
    ],
  },

  {
    id: "learning-item-5",
    title: "Assessment & Feedback",
    type: "05 — Improve",
    duration: "Measure Your Progress",
    icon: ClipboardCheck,
    responsibilities: [
      "Evaluate your understanding through assignments, projects, and assessments.",
      "Identify areas where you need more practice and improvement.",
      "Receive feedback and guidance to strengthen your weak areas.",
      "Track your progress as you move through the learning journey.",
    ],
    skills: [
      "Assessments",
      "Feedback",
      "Progress Tracking",
      "Skill Improvement",
    ],
  },

  {
    id: "learning-item-6",
    title: "Career Preparation",
    type: "06 — Prepare",
    duration: "Get Career Ready",
    icon: BriefcaseBusiness,
    responsibilities: [
      "Prepare your projects and skills for real-world opportunities.",
      "Improve your resume, portfolio, and professional profile.",
      "Develop interview-focused knowledge and practical confidence.",
      "Understand how to present your skills effectively to potential employers.",
    ],
    skills: [
      "Resume Building",
      "Portfolio",
      "Interview Preparation",
      "Communication",
      "Career Skills",
    ],
  },

  {
    id: "learning-item-7",
    title: "Complete & Keep Growing",
    type: "07 — Grow",
    duration: "Beyond the Course",
    icon: Rocket,
    responsibilities: [
      "Complete your learning journey with a stronger practical skill set.",
      "Continue improving through projects, practice, and advanced learning.",
      "Apply your knowledge to real-world work, freelance opportunities, or careers.",
      "Keep learning as technologies, tools, and industry requirements evolve.",
    ],
    skills: [
      "Continuous Learning",
      "Advanced Skills",
      "Career Growth",
      "Real-World Application",
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
export function  Courseprocess({
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

  <span className="text-xl font-semibold uppercase tracking-[0.3em] text-blue-400">
    How We Work
  </span>

  <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
    Your Vision. Our Process.
    <br />
    <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
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
        <Courseprocess data={timelineData} expandMode="multi" />
      </div>
    </div>;
}