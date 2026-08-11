import React from 'react'

function Hero1() {
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


    {/* Main Heading */}
    <h1
      className="
        max-w-5xl
        text-5xl
        font-extrabold
        leading-[1.05]
        tracking-tight
        text-black
        sm:text-6xl
        md:text-7xl
        lg:text-7xl
      "
    >
      Build Skills.
      <br />

      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
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
 <div className="mt-10 flex flex-col items-start gap-4">
  {/* Choti si Rating Line button ke upar */}
  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
    <span className="flex text-amber-500">★★★★★</span>
    <span>4.9/5 by 10,000+ Learners</span>
  </div>

  <div className="flex flex-col items-center gap-4 sm:flex-row w-full">
    {/* Primary Button - Read Success Stories */}
    <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30">
      See Why Learners Love Us
      <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-.707-.293V3a1 1 0 00-1-1H4a1 1 0 00-1 1v11a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h6z" />
      </svg>
    </button>

    {/* Secondary Button - Video Testimonials */}
    <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600">
      Watch Student Reviews
    </button>
  </div>
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