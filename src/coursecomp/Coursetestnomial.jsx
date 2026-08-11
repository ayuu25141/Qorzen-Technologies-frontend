
import React from 'react'
import Testimonials from '..//Testimonials/Testimonials.jsx';
function Coursetestnomial() {
const testimonialData = [
  {
    text: "The web development course at this institute completely transformed my skills. The practical, hands-on approach and real-world projects helped me land my first tech internship before graduation.",
    author: "Rahul Sharma",
    title: "B.Tech CSE Student, 3rd Year",
    image: "https://images.unsplash.com/photo-1650398121393-18f2055c519b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Balancing college classes with this Data Science program was surprisingly manageable. The mentors explain complex algorithms in a very simple way, making learning highly engaging.",
    author: "Priya Mehta",
    title: "B.Sc Data Science Graduate",
    image: "https://plus.unsplash.com/premium_photo-1661497456854-8df2d3928e8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "I joined the UI/UX design batch with zero design knowledge. The structured roadmap, constructive portfolio reviews, and continuous guidance helped me crack a competitive design challenge.",
    author: "Amit Verma",
    title: "Design Student, Batch 2025",
    image: "https://images.unsplash.com/photo-1548057407-b022b3f5b6ab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The mock interviews and placement preparation sessions provided here build an immense amount of confidence. I successfully cleared the technical rounds for my campus placement.",
    author: "Neha Kapoor",
    title: "MCA Final Year Student",
    image: "https://plus.unsplash.com/premium_photo-1661770083125-beff7ecc7005?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "What sets this curriculum apart is the relevant up-to-date industry tech stack. The live coding sessions allowed me to fix fundamental mistakes that textbooks usually omit.",
    author: "Rohit Gupta",
    title: "Full Stack Development Student",
    image: "https://plus.unsplash.com/premium_photo-1661310261765-f0481298ac4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "I appreciated the highly collaborative community environment in the Python program. Discussing logic errors with fellow peers in the Discord channel accelerated my overall learning pace.",
    author: "Ananya Singh",
    title: "BCA Student, 2nd Year",
    image: "https://plus.unsplash.com/premium_photo-1661487025205-89a0067e8486?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Building an end-to-end cloud computing project from scratch gave me immense practical clarity. The dedicated doubt-solving assistance team is super quick to respond.",
    author: "Vikram Patel",
    title: "Cloud Engineering Student",
    image: "https://images.unsplash.com/photo-1730458001290-b144c6e35b0f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The digital marketing certification offered here is comprehensive and highly industry-focused. Learning real budget optimization and running actual live campaigns made a huge difference.",
    author: "Simran Kaur",
    title: "BBA Digital Marketing Student",
    image: "https://images.unsplash.com/photo-1774850236254-f0aa024ca20c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

  return (
 <>
 <div className="mx-auto max-w-3xl text-center">
  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
    Learner Stories
  </span>

  <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
    Real Experiences.
    <br />
    <span className="text-blue-600">
      Real Growth.
    </span>
  </h2>

  <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
    See what our learners have to say about their learning journey,
    practical training, and the skills they built with us.
  </p>
</div>
  <Testimonials 
    testimonials={testimonialData}
  />
 
 
 </>
  )
}

export default Coursetestnomial