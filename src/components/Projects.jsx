import React, { useState, useEffect } from "react";
import playground1 from "../assets/playground1.png" ;
import playground2 from "../assets/playground2.png" ;
import playground3 from "../assets/playground3.png" ;
import playground4 from "../assets/playground4.png" ;
import movix1 from "../assets/movix1.png";
import movix2 from "../assets/movix2.png";
import movix3 from "../assets/movix3.png";
import movix4 from "../assets/movix4.png";
import delishdash1 from "../assets/delishdash1.png";
import delishdash2 from "../assets/delishdash2.png";
import delishdash3 from "../assets/delishdash3.png";
import movies1 from '../assets/movies1.png';
import movies2 from '../assets/movies2.png';
import movies3 from '../assets/movies3.png';
import expense1 from '../assets/expense1.png';
import expense2 from '../assets/expense2.png';
import expense3 from '../assets/expense3.png';
import expense4 from '../assets/expense4.png';
import ec1 from '../assets/ec1.png';
import ec2 from '../assets/ec2.png';
import ec3 from '../assets/ec3.png';
import ec4 from '../assets/ec4.png';
import ec5 from '../assets/ec5.png';

const projects = [
  {
    id: 1,
    name: "Playground",
    technologies: "MERN Stack",
    images: [playground1, playground2, playground3 ,playground4],
    github: "https://github.com/yashvardhan8787/lms",
    applink:"https://lms-zeas-yashvardhan-singhs-projects.vercel.app/"
  },
  {
    id: 2,
    name: "Movix",
    technologies: "React",
    images: [movix1,movix2,movix3,movix4],
    github: "https://github.com/yashvardhan8787/movix",
    applink:"https://movix-theta-two.vercel.app/"
  },
  {
    id: 3,
    name: "Delish Dash",
    technologies: "React",
    images: [delishdash1,delishdash2,delishdash3],
    github: "https://github.com/yashvardhan8787/delishdash",
    applink:"https://delishdash.vercel.app/"
  },
  {
    id: 4,
    name: "Movies App",
    technologies: "Flutter",
    images: [movies1, movies2, movies3],
    github: "https://github.com/yashvardhan8787/Movies",
    applink:""
  },
  {
    id: 5,
    name: "Expense Tracker App",
    technologies: "Flutter and Firebase",
    images: [expense1, expense2 ,expense3, expense4],
    github: "https://github.com/yashvardhan8787/flutter-expense-tracker",
    applink:""
  },
  {
    id: 6,
    name: "Ecommerce App",
    technologies: "flutter",
    images: [ec1 , ec2 ,ec3 ],
    github: "https://github.com/yashvardhan8787/flutter-ecommerce-app",
    applink:""
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevState) => {
        const newState = {};
        projects.forEach((project) => {
          const currentIndex = prevState[project.id] || 0;
          newState[project.id] =
            (currentIndex + 1) % project.images.length;
        });
        return newState;
      });
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* Carousel */}
              <div className="relative">
                <img
                  src={project.images[currentImageIndex[project.id] || 0]}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 "
                />
              </div>
              {/* Project Details */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.applink}
                className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View 
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
