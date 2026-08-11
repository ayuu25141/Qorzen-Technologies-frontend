"use client";

import React, { useState } from "react";
import Courserecord from "./Courserecord";


// ===============================
// LOGO ICON
// ===============================
const LogoIcon = () => (
  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
    <span className="text-lg font-black text-white">Q</span>
  </div>
);


// ===============================
// MENU ICON
// ===============================
const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);


// ===============================
// CLOSE ICON
// ===============================
const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6l12 12M18 6L6 18"
    />
  </svg>
);


// ===============================
// ARROW ICON
// ===============================
const ArrowIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
);


// ===============================
// NAV LINK
// ===============================
const NavLink = ({
  href,
  children,
  isActive = false,
}) => (
  <a
    href={href}
    className={`
      relative rounded-lg px-3 py-2
      text-sm font-medium
      transition-all duration-300
      ${
        isActive
          ? "text-blue-600"
          : "text-gray-600 hover:text-blue-600"
      }
    `}
  >
    {children}

    {isActive && (
      <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
    )}
  </a>
);


// ===============================
// BUTTON
// ===============================
const Button = ({
  children,
  variant = "primary",
  className = "",
}) => {

  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-5
    py-2.5
    text-sm
    font-semibold
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500/30
    hover:-translate-y-0.5
  `;

  const variants = {

    primary: `
      bg-gray-950
      text-white
      shadow-lg
      shadow-gray-900/10
      hover:bg-blue-600
      hover:shadow-blue-600/20
    `,

    secondary: `
      border
      border-gray-200
      bg-white
      text-gray-800
      shadow-sm
      hover:border-blue-200
      hover:bg-blue-50
      hover:text-blue-600
    `,

    outline: `
      border
      border-gray-300
      bg-white
      text-gray-800
      hover:border-blue-300
      hover:bg-blue-50
      hover:text-blue-600
    `,
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};


// ===============================
// MOBILE MENU
// ===============================
const MobileMenu = ({
  isOpen,
  navItems,
}) => (
  <div
    className={`
      absolute
      left-0
      top-full
      w-full
      border-t
      border-gray-200
      bg-white/95
      shadow-xl
      backdrop-blur-xl
      transition-all
      duration-300
      md:hidden

      ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }
    `}
  >
    <div className="mx-auto max-w-7xl px-6 py-5">

      <div className="flex flex-col gap-1">

        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              transition-all
              ${
                item.active
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              }
            `}
          >
            {item.label}
          </a>
        ))}

      </div>

      <div className="mt-4 border-t border-gray-100 pt-4">

        <Button
          variant="primary"
          className="w-full"
        >
          Explore Courses
          <ArrowIcon />
        </Button>

      </div>

    </div>
  </div>
);


// ===============================
// HERO COMPONENT
// ===============================
const Coursehero2 = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <header className="relative overflow-hidden bg-white">

      {/* =====================================
          NAVBAR
      ====================================== */}



      {/* =====================================
          HERO BACKGROUND
      ====================================== */}

      <section className="relative">

        {/* Soft blue glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            -z-10
            h-[550px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.08]
            blur-[130px]
          "
        />


        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
            bg-[size:80px_80px]
            opacity-40
            [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
          "
        />


        {/* =====================================
            HERO CONTENT
        ====================================== */}

        <div
          className="
            mx-auto
            flex
            min-h-[680px]
            max-w-7xl
            flex-col
            items-center
            justify-center
            px-6
            py-24
            text-center
            lg:min-h-[720px]
          "
        >

          {/* =================================
              BADGE
          ================================= */}

          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50/80
              px-4
              py-2
              shadow-sm
              shadow-blue-500/5
            "
          >

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />

            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600">
              Industry-Focused Learning
            </span>

          </div>


          {/* =================================
              MAIN HEADING
          ================================= */}

          <h1
            className="
              max-w-5xl
              text-5xl
              font-extrabold
              leading-[1.02]
              tracking-[-0.04em]
              text-gray-950
              sm:text-6xl
              md:text-7xl
              lg:text-[80px]
            "
          >

            Master Skills.

            <br />

            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-sky-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Build What's Next.
            </span>

          </h1>


          {/* =================================
              DESCRIPTION
          ================================= */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-gray-600
              sm:text-lg
            "
          >
            Learn in-demand technologies through practical,
            project-driven courses designed to turn knowledge
            into real-world skills.
          </p>


          {/* =================================
              CTA BUTTONS
          ================================= */}

 


<Courserecord />






          {/* =================================
              TRUST POINTS
          ================================= */}

          <div
            className="
              mt-14
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-8
              gap-y-4
              text-sm
              text-gray-500
            "
          >

            {/* Point 1 */}

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              Practical Projects

            </div>


            {/* Divider */}

            <div className="hidden h-4 w-px bg-gray-300 sm:block" />


            {/* Point 2 */}

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              Industry-Relevant Skills

            </div>


            {/* Divider */}

            <div className="hidden h-4 w-px bg-gray-300 sm:block" />


            {/* Point 3 */}

            <div className="flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              Career-Focused Learning

            </div>

          </div>


          {/* =================================
              BOTTOM MICRO TEXT
          ================================= */}

          <div className="mt-12 flex items-center gap-2 text-xs text-gray-800">

            <span className="h-px w-8 bg-gray-200" />

            Learn. Build. Grow.

            <span className="h-px w-8 bg-gray-200" />

          </div>

        </div>

      </section>

    </header>
  );
};


export default Coursehero2;