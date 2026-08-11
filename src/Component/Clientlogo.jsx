import React from 'react'
import { SlidingLogoMarquee } from "@/components/lightswind/sliding-logo-marquee"
import Record from './Record';
function Clientlogo() {
    // Basic Usage
const logos = [
  {
    id: "1",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/13.031bf3c8.png"
          alt="Client Logo 1"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },

  {
    id: "2",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/14.b46d6b10.png"
          alt="Client Logo 2"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },

  {
    id: "3",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/22.64cc6432.png"
          alt="Client Logo 3"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },

  {
    id: "4",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/5.8902a4ed.png"
          alt="Client Logo 4"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },

  {
    id: "5",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/10.0b8b6794.png"
          alt="Client Logo 5"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },

  {
    id: "6",
    content: (
      <div className="flex h-20 w-48 items-center justify-center">
        <img
          src="https://novanectar.co.in/_next/static/media/12.8f27dc0a.png"
          alt="Client Logo 6"
          className="max-h-16 max-w-[170px] w-auto object-contain"
        />
      </div>
    ),
  },
];
  return (
    <>
 
  <div className="mx-auto max-w-3xl mt-5 text-center">

  <span className="text-xl font-semibold uppercase tracking-[0.3em] text-blue-400">
 OUR CLIENTS
  </span>

  <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
Trusted Partnerships.<br></br>
    <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
       Meaningful Results.
    <br />
    </span>
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-800 sm:text-lg">
We work closely with our clients to transform ambitious ideas into products that create real value.
  </p>

</div>
<SlidingLogoMarquee 
  items={logos}
  speed={20}
  height="120px"
  enableBlur={true}
  blurIntensity={2}
  pauseOnHover={true}
  showGridBackground={true}
/>
    

<Record  />




    
    </>
  )
}

export default Clientlogo