
import React from 'react'
import Testimonials from '..//Testimonials/Testimonials.jsx';
function Testnomial() {
 const testimonialData = [
  {
    text: "QorZen Technologies understood exactly what we needed and turned our idea into a clean, professional website. The overall experience was smooth and the final result exceeded our expectations.",
    author: "Rahul Sharma",
    title: "Founder, Sharma Enterprises",
    image: "https://images.unsplash.com/photo-1650398121393-18f2055c519b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The team was very professional and responsive throughout the project. They paid attention to small details and delivered a website that feels modern, fast, and easy to use.",
    author: "Priya Mehta",
    title: "Marketing Manager",
    image: "https://plus.unsplash.com/premium_photo-1661497456854-8df2d3928e8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "We wanted something simple but premium for our business, and QorZen delivered exactly that. The design looks great on both mobile and desktop, and our customers have noticed the difference.",
    author: "Amit Verma",
    title: "Director, Verma Solutions",
    image: "https://images.unsplash.com/photo-1548057407-b022b3f5b6ab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "From the first discussion to the final delivery, everything was handled professionally. They understood our requirements quickly and created a website that represents our brand perfectly.",
    author: "Neha Kapoor",
    title: "Founder, Kapoor Studio",
    image: "https://plus.unsplash.com/premium_photo-1661770083125-beff7ecc7005?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "I really liked their approach to design and development. The website is fast, modern, and much easier for our customers to navigate. Highly impressed with the quality of work.",
    author: "Rohit Gupta",
    title: "Business Owner",
    image: "https://plus.unsplash.com/premium_photo-1661310261765-f0481298ac4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "QorZen helped us turn our concept into a complete digital experience. Communication was clear, the development process was smooth, and the final website looks far more professional than we expected.",
    author: "Ananya Singh",
    title: "Co-Founder, UrbanNest",
    image: "https://plus.unsplash.com/premium_photo-1661487025205-89a0067e8486?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "The attention to detail was excellent. Everything from the layout and animations to the overall user experience was thoughtfully designed. We are extremely happy with the final product.",
    author: "Vikram Patel",
    title: "CEO, Patel Ventures",
    image: "https://images.unsplash.com/photo-1730458001290-b144c6e35b0f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Working with QorZen was a great experience. They were easy to communicate with, understood our vision, and delivered a polished website that gives our business a much stronger online presence.",
    author: "Simran Kaur",
    title: "Founder, Kaur & Co.",
    image: "https://images.unsplash.com/photo-1774850236254-f0aa024ca20c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  return (
 <>
  <Testimonials 
    testimonials={testimonialData}
  />
 
 
 </>
  )
}

export default Testnomial