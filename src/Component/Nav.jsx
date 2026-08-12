import React, { useState } from 'react'

import { FiChevronDown } from "react-icons/fi";
import logoimage from '../assets/logo.png'
function Nav() {
const [service, openservice] = useState(false);
 const [course,opencourse] = useState(false)
  const [training,opentraining] = useState(false)
const [resource,openresource ] = useState(false)
  let coursesavial = [
    {
      id:1,
      link:"",
      name:"Data Analysis & Data Science "
    },
        {
      id:2,
      link:"",
      name:"Digital Marketing "
    },
        {
      id:3,
      link:"",
      name:"Web Design & Development "
    },
        {
      id:4,
      link:"",
      name:"AI & Automation "
    },
        {
      id:5,
      link:"",
      name:"Software Development"
    },
        {
      id:6,
      link:"",
      name:"Graphic Designing "
    },
     {
      id:7,
      link:"",
      name:"Search Engine Optimization (SEO)"
    },
     {
      id:8,
      link:"",
      name:"Social media marketing"
    },
     {
      id:9,
      link:"",
      name:"Cloud Computing"
    },
     {
      id:10,
      link:"",
      name:"Cyber Security "
    },
     {
      id:11,
      link:"",
      name:"Networking & IT Infrastructure "
    },
    
  ]
  let reourcesavail = [{
    id : 1,
    link:"",
    name : "Blog"
  },
  {
    id : 2,
    link:"",
    name : "Event"
  },
  {
    id : 3,
    link:"",
    name : "News"
  },
   {
    id : 4,
    link:"",
    name : "About us"
  },


]
let coursesection = [
 { id:1,
  link:"",
  name : "Ai Tools"

},
 { id:2,
  link:"",
  name : "Online Business"

},
]

let trainigsection  = [
  {
    id:1,
    link:"/courses?category=ai-tool",
    name:"Ai tools"
  },
    {
    id:2,
    link:"/courses?category=technical",
    name:"Technical"
  },
    {
    id:3,
    link:"/courses?category=non-technical",
    name:"Non technical"
  },
    {
    id:4,
    link:"/courses?category=networking",
    name:"Networking"
  },
  {
    id:5,
    link:"/courses?category=training",
    name:" Corporate training"
  },
]
  return (
    <div className="navbar bg-white text-black border-solid border-b-black px-4 md:px-8">
      {/* Brand Logo Section */}
   <div className="flex-1">
  <a className="flex items-center gap-3 cursor-pointer font-sans select-none">
 
    <img
      src={logoimage}
      alt="QorZen Technologies"
      className="w-10 h-10 object-contain"
    />

    {/* Brand Typography */}
    <div className="flex flex-col justify-center leading-none">
      {/* 2. FIXED: 'font-white' को 'text-white' में बदला */}
      <span className="    bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent font-extrabold text-xl tracking-wide font-sans">
        QorZen
      </span>
      {/* 3. सब-टेक्स्ट का साइज और स्पेसिंग परफेक्ट की */}
      <span className="    bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent font-bold text-[15px] tracking-[0.12em] mt-0.5 uppercase">
        Technologies
      </span>
    </div>
  </a>
</div>


      {/* Navigation Links */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium text-xl text-black">
          <li><a className="hover:text-sky-500 focus:bg-transparent active:bg-transparent">Home</a></li>
          
          {/* Services Dropdown */}
       {/* 1. Added 'relative' so the dropdown floats directly underneath */}
<li
  onMouseEnter={() => openservice(true)}
  onMouseLeave={() => openservice(false)}
  className="relative"
>
<button
  type="button"
  className="flex items-center gap-1 cursor-pointer hover:text-sky-500"
>
  Services

  <FiChevronDown
    className={`transition-transform duration-200 ${
      service ? "rotate-180" : "rotate-0"
    }`}
  />
</button>
  {service && (
    <ul className="absolute left-0 top-full z-50 top-full w-max rounded-lg border border-gray-100 bg-white p-2 text-sm text-black shadow-lg">
      {coursesavial.map((elem) => (
        <li key={elem.id} className="hover:text-sky-500">
          <a
         onClick={(e)=>{
          e.preventDefault()
          document.getElementById(elem.link)?.scrollIntoView({
               behavior: "smooth",
        block: "start",
          })
         }}
            className="block whitespace-nowrap rounded-md px-4 py-2 transition-colors hover:bg--white"
          >
            {elem.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>



{/* Training  section */}


               <li
  onMouseEnter={() => opentraining(true)}
  onMouseLeave={() => opentraining(false)}
  className="relative"
>
<button
  type="button"
  className="flex items-center gap-1 cursor-pointer hover:text-sky-500"
>
Training

  <FiChevronDown
    className={`transition-transform duration-200 ${
      training? "rotate-180" : "rotate-0"
    }`}
  />
</button>
  {training && (
    <ul className="absolute left-0 top-full z-50 top-full w-max rounded-lg border border-gray-100 bg-white p-2 text-sm text-black shadow-lg">
      {trainigsection.map((elem) => (
        <li key={elem.id} className="hover:text-sky-500">
          <a
            href={elem.link}
            className="block whitespace-nowrap rounded-md px-4 py-2 transition-colors hover:bg-white zinc-800"
          >
            {elem.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>










{/* Courses section */}


        <li
  onMouseEnter={() => opencourse(true)}
  onMouseLeave={() => opencourse(false)}
  className="relative"
>
<button
  type="button"
  className="flex items-center gap-1 cursor-pointer hover:text-sky-500"
>
Courses

  <FiChevronDown
    className={`transition-transform duration-200 ${
      course ? "rotate-180" : "rotate-0"
    }`}
  />
</button>
  {course && (
    <ul className="absolute left-0 top-full z-50 top-full w-max rounded-lg border border-gray-100 bg-white p-2 text-sm text-black shadow-lg">
      {coursesection.map((elem) => (
        <li key={elem.id} className="hover:text-sky-500">
          <a
            href={elem.link}
            className="block whitespace-nowrap rounded-md px-4 py-2 transition-colors hover:bg-white"
          >
            {elem.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>











          {/* Resources Dropdown */}
         
               <li
  onMouseEnter={() => openresource(true)}
  onMouseLeave={() => openresource(false)}
  className="relative"
>
<button
  type="button"
  className="flex items-center gap-1 cursor-pointer hover:text-sky-500"
>
Resources

  <FiChevronDown
    className={`transition-transform duration-200 ${
     resource? "rotate-180" : "rotate-0"
    }`}
  />
</button>
  {resource && (
    <ul className="absolute left-0 top-full z-50 top-full w-max rounded-lg border border-gray-100 bg-white p-2 text-sm text-blakc shadow-lg">
      {reourcesavail.map((elem) => (
        <li key={elem.id} className="hover:text-sky-500">
          <a
            href={elem.link}
            className="block whitespace-nowrap rounded-md px-4 py-2 transition-colors hover:bg-white"
          >
            {elem.name}
          </a>
        </li>
      ))}
    </ul>
  )}
</li>




          {/* Career Dropdown */}
         
        </ul>
      </div>
      <div className="flex text-xl items-center gap-3 ml-6">
  <button
    type="button"
    className="px-4 py-2  font-medium text-black hover:text-sky-400 transition-colors"
  >
    Login
  </button>

<button
  type="button"
  className="
    px-5
    py-2
    font-medium
    text-white
    bg-gradient-to-r
    from-[#E91E9B]
    to-[#7424E8]
    hover:from-[#D9188F]
    hover:to-[#6420D0]
    rounded-lg
    transition-all
    duration-200
    shadow-sm
    hover:shadow-[#7424E8]/30
  "
>
  Sign Up
</button>
</div>
    </div>
  )
}

export default Nav
