import React from 'react'
import BeamBar from '../BeamBar/BeamBar';
import { Link } from "react-router-dom";function Hero1() {
  return (
  <>

   
  <section className="relative overflow-hidden bg-white">
  {/* Background Grid */}
  <div className="absolute inset-0 -z-10">
    <div
      className="
        absolute inset-0
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
        linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[size:110px_110px]
        opacity-60
      "
    />

    {/* Soft Gradient */}
    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
  </div>

  {/* Hero Content */}
  <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">

    {/* Small Badge */}
    <div
      className="
        mb-7 inline-flex items-center gap-2
        rounded-full
        border border-blue-200
        bg-blue-50
        px-4 py-2
        text-sm font-semibold
           bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent
        shadow-sm
      "
    >
      <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
      Industry-Focused IT Training
    </div>

    {/* Main Heading */}
    <h1
      className="
        max-w-5xl
        text-5xl
        font-georgia
        font-extrabold
        leading-[1.05]
        tracking-tight
      text-[#353243]
        sm:text-6xl
        md:text-7xl
        lg:text-7xl
      "
    >
      Build Skills.
      <br />

      <span className="  bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
        Shape Your Future.
      </span>
    </h1>

    {/* Description */}
    <p
      className="
        mt-8
        max-w-3xl
        text-base
        leading-8
        text-gray-600
        sm:text-lg
        md:text-xl
      "
    >
      Learn in-demand IT skills through practical, industry-focused
      training designed to turn beginners into confident professionals.
    </p>

    {/* CTA Buttons */}
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">

      {/* Primary Button */}
      <Link to={"/courses"}>
         <button
        className="
          group
          inline-flex items-center justify-center gap-2
          rounded-xl
          bg-blue-600
          px-8 py-4
          text-base font-semibold
          text-white
          shadow-lg shadow-blue-600/25
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-blue-700
          hover:shadow-xl hover:shadow-blue-600/30
        "
      >
        Explore Courses

        <svg
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
      </Link>
   

      {/* Secondary Button */}
      <button
        className="
          inline-flex items-center justify-center
          rounded-xl
          border border-gray-300
          bg-white
          px-8 py-4
          text-base font-semibold
          text-gray-800
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-300
          hover:bg-blue-50
          hover:text-blue-600
        "
      >
        Start Learning
      </button>

    </div>

    {/* Trust / Highlights */}
    <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-600">

      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Practical Learning
      </div>

      <div className="hidden h-4 w-px bg-gray-600 sm:block" />

      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Industry-Relevant Skills
      </div>

      <div className="hidden h-4 w-px bg-gray-600 sm:block" />

      <div className="flex items-center gap-2">
        <svg
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Career-Focused Training
      </div>

    </div>
  </div>
</section>
  
  </>
  )
}

export default Hero1