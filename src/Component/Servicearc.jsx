"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white group-hover:text-pink-500 transition-colors">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>;

  let coursesavial = [
    {
      id:1,
      url:"https://i.postimg.cc/d18x4Rq5/Gemini-Generated-Image-be7iztbe7iztbe7i-(1).png",
      title:"Data Analysis & Data Science "
    },
        {
      id:2,
      url:"https://i.postimg.cc/N0tTRRzg/Gemini-Generated-Image-be7iztbe7iztbe7i-(2).png",
      title:"Digital Marketing "
    },
        {
      id:3,
      url:"https://i.postimg.cc/8CvKzdrF/Gemini-Generated-Image-be7iztbe7iztbe7i-(3).png",
      title:"Web Design & Development "
    },
        {
      id:4,
      url:"https://i.postimg.cc/PfWg4HJN/Gemini-Generated-Image-be7iztbe7iztbe7i.png",
      title:"AI & Automation "
    },
        {
      id:5,
      url:"https://i.postimg.cc/tJHCcGLN/Gemini-Generated-Image-be7iztbe7iztbe7i.png",
      title:"Software Development"
    },
        {
      id:6,
      url:"https://i.postimg.cc/QxmxfPSS/Gemini-Generated-Image-be7iztbe7iztbe7i.png",
      title:"Graphic Designing "
    },
     {
      id:7,
      url:"https://i.postimg.cc/NfsQ2DYG/Gemini-Generated-Image-be7iztbe7iztbe7i.png",
      title:"Search Engine Optimization (SEO)"
    },
     {
      id:8,
      url:"https://i.postimg.cc/hjRBDbp7/Gemini-Generated-Image-be7iztbe7iztbe7i-(1).png",
      title:"Social media marketing"
    },
     {
      id:9,
      url:"https://i.postimg.cc/1RHQSF6Z/Gemini-Generated-Image-be7iztbe7iztbe7i-(2).png",
      title:"Cloud Computing"
    },
     {
      id:10,
      url:"https://i.postimg.cc/qvtV2ZFV/Gemini-Generated-Image-be7iztbe7iztbe7i-(3).png",
      title:"Cyber Security "
    },
     {
      id:11,
      url:"https://i.postimg.cc/Vv7pCjB6/Gemini-Generated-Image-be7iztbe7iztbe7i-(4).png",
      title:"Networking & IT Infrastructure "
    },
    
  ]
const GridItem = ({
  item
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div className="mb-4 break-inside-avoid relative cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} whileHover={{
    y: -5
  }} transition={{
    type: 'spring',
    stiffness: 300
  }}>
      <img src={item.url} alt={item.title} className="w-full h-auto rounded-xl shadow-lg" onError={e => {
      const target = e.target;
      target.onerror = null;
      target.src = `https://placehold.co/400x300/fecaca/333333?text=Image+Not+Found`;
    }} />
      <AnimatePresence>
        {isHovered && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
            <div className="p-4 h-full flex flex-col justify-between">
               
                <p className="text-white font-bold text-base truncate">{item.title}</p>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.div>;
};
const MasonryGrid = ({
  items
}) => {
  return <div className="columns-3 gap-16 sm:columns-2 lg:columns-3 xl:columns-4" style={{
    columnWidth: '280px'
  }}>
      {items.map(item => <GridItem key={item.id} item={item} />)}
    </div>;
};
export default function  Servicearc() {
  return <div id='service'  className="font-sans transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl">
  {/* Eyebrow */}
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-cyan-400" />

    <span className="text-xl font-semibold uppercase tracking-[0.25em] text-blue-400">
      Our Services
    </span>
  </div>

  {/* Heading */}
  <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
    Technology Solutions,
    <br />
    <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
      Built Around Your Needs.
    </span>
  </h2>

  {/* Subheading */}
  <p className="mt-6 max-w-2xl text-base leading-8 text-gray-800 sm:text-lg">
    From modern web applications to scalable software solutions,
    we help businesses turn ideas into reliable, high-quality
    digital experiences.
  </p>
</div>
        <main className='pt-15'>
          <MasonryGrid items={coursesavial} />
        </main>
      </div>
    </div>;
}