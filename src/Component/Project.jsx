import React from 'react'
import ThreeDCarousel from './ThreeDCarousel'
function Project() {
  return (
<>


<section className="bg-white">
  <div className="mx-auto max-w-5xl px-6 py-24 text-center">

    <h1 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-zinc-950 md:text-7xl">
      Building Digital Experiences<br></br>
      <span className="bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent"> That Move Businesses Forward.</span>
    </h1>

    <p className="mx-auto  max-w-2xl text-lg leading-8 text-zinc-900 md:text-xl">
      We design and develop modern, high-performance digital solutions
      that combine thoughtful design, powerful technology, and seamless
      user experiences.
    </p>

  </div>
</section>

<ThreeDCarousel />



</>
  )
}

export default Project