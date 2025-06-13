'use client'

import { useState } from "react";

import Image from "next/image";

const problemSets = [
  {
    title: "Designing Sustainable Cities",
    description: "Devise a solution to improve the current sustainability of any city of your choice. Your solution may be hardware, software, a mix of both or a written piece.  ",
    link: "#",
    links:"SDG Links: 9, 11"
  },
  {
    title: "Economically Sustainable Cities",
    description: "Devise an economic/fiscal model for a sustainable city where it can be self-sustained. Your solution may be hardware, software, a mix of both or a written piece. ",
    link: "#",
    links:"SDG Links: 1, 2, 3, 4, 8, 9, 11, 12, 14, 15, 16"
  },
  {
    title: "Energy Systems in Sustainable Cities",
    description: "Devise a solution to improve or remake energy/power systems for a city of your choice. Your solution may be hardware, software, a mix of both or a written piece. ",
    link: "#",
    links:"SDG Links: 7, 8, 9, 11"
  },
  {
    title: "Health & Well-being in Sustainable Cities",
    description: "Devise a solution to improve the health and well-being of residents in any city/region of your choice. Your solution may be hardware, software, a mix of both or a written piece.",
    link: "#",
    links:"SDG Links: 3, 9, 11 "
  },
  {
    title: "Sustainable Sewage System in Cities",
    description: "Devise a solution to improve the current sustainability of sewage systems and treatments in a city of your choice. Your solution may be hardware, software, a mix of both or a written piece.",
    link: "#",
    links:"SDG Links: 6, 9, 11"
  },
];

const problemSets2 = [
  {
    title: "Roads in Sustainable Cities ",
    description: "Devise a solution to improve current roadworks in any city/country of your choice. Your solution may include hardware or software.",
    link: "#",
    links:"SDG Links: 11"
  },
  {
    title: "Education of Sustainable Cities",
    description: "Devise an educational campaign or course that teaches a target audience of your choice about sustainability and sustainability in cities.",
    link: "#",
    links:"SDG Links: 4, 11"
  },
  {
    title: "Bridges in Sustainable Cities",
    description: "Devise a solution to improve sustainability of bridges or create new sustainable bridges in any city/country of your choice. Your solution may be presented in hardware or software.",
    link: "#",
    links:"SDG Links: 11"
  },
  {
    title: "Health & Well-being in Sustainable Cities",
    description: "Devise a solution to improve the health and well-being of residents in any city/region of your choice by improving the sustainability of the city chosen.",
    link: "#",
    links:"SDG Links: 3, 6, 11"
  },
  {
    title: "Energy in Sustainable Cities ",
    description: "Devise a solution to improve the efficiency of usage of energy in any city/country of your choice. Your solution may be hardware, software or a mix of both.",
    link: "#",
    links:"SDG Links: 7, 11"
  },
];

const galleryImages = [
  {
    src: "/winner1.png",
    alt: "Our winner from the Grade 8/9s!",
    caption: "Our winner from the Grade 8/9s!",
  },
  {
    src: "/winner2.jpg",
    alt: "Our winner from the Grade 6/7s!",
    caption: "Our winner from the Grade 6/7s!",
  },
  {
    src: "/winner1highlight.jpg",
    alt: "Award ceremony highlights",
    caption: "Our winner's presentation!",
  },
  {
    src: "/winner2highlight.jpg",
    alt: "Award ceremony highlights",
    caption: "Our winner's presentation!",
  },{
    src: "/highlight2.jpg",
    alt: "Team Alpha winning the Hackathon",
    caption: "Key moments in Grade 8/9 presentation",
  },
  {
    src: "/highlight3.jpg",
    alt: "Team Alpha winning the Hackathon",
    caption: "Key moments in Grade 6/7 presentation",
  },
  {
    src: "/highlight5.jpg",
    alt: "Team Alpha winning the Hackathon",
    caption: "Key moments in Grade 8/9 presentation",
  },
  {
    src: "/highlight4.jpg",
    alt: "Team Alpha winning the Hackathon",
    caption: "Key moments in Grade 6/7 presentation",
  },
];



export default function Home() {

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-16 font-sans">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">Hackathon Highlights</h1>
          <p className="text-lg sm:text-xl text-gray-300">Celebrating our winners and memorable moments</p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {galleryImages.map(({ src, alt, caption }, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-900 hover:shadow-blue-500/50 transition-shadow duration-300 cursor-pointer">
              <Image 
                src={src} 
                alt={alt} 
                width={400} 
                height={300} 
                className="object-cover w-full h-64 sm:h-48 md:h-64 transition-transform duration-300 group-hover:scale-105" 
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm sm:text-base font-semibold">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 sm:p-16 font-sans">

        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">Hackathon Problem Sets</h1>
          <p className="text-lg sm:text-xl text-gray-300">Get inspired. Start building. Change the world.</p>
        </header>

        <h1 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">Grade 6-7</h1>

        <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {problemSets2.map((set, index) => (
            <div
              key={index}
              // href={set.link}
              className="group bg-gray-800 border border-gray-700 p-6 rounded-xl transition duration-300 hover:border-blue-500 hover:scale-[1.02] shadow-md hover:shadow-blue-500/20"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">{set.title}</h2>
              <p className="text-gray-400">{set.description}</p>
              <span className="inline-block mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {/* View Details → */}
                {set.links}
              </span>
            </div>
          ))}
        </main>

        <h1 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight mt-[50px]">Grade 8-9</h1>

        <main className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {problemSets.map((set, index) => (
            <div
              key={index}
              // href={set.link}
              className="group bg-gray-800 border border-gray-700 p-6 rounded-xl transition duration-300 hover:border-blue-500 hover:scale-[1.02] shadow-md hover:shadow-blue-500/20"
            >
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">{set.title}</h2>
              <p className="text-gray-400">{set.description}</p>
              <span className="inline-block mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {/* View Details → */}
                {set.links}
              </span>
            </div>
          ))}
        </main>

        <footer className="mt-24 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NAIS Hackathon. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
