import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Masih Codecademy (EdTech Platform)",
      description: "Full-stack EdTech platform with AWS VPC architecture, ELB, Auto Scaling, and containerized deployment using Docker and AWS ECR. Achieved 40% reduction in deployment time.",
      // For image version
      image: "/assets/images/bannerf1.png",
      // For video version (commented out for future use)
      // video: {
      //   url: "/assets/videos/masih-codecademy.mp4",
      //   thumbnail: "/assets/images/masih-codecademy.png"
      // },
      tags: ["AWS VPC", "ELB", "Docker", "CodePipeline", "React", "Django"]
    },
    {
      title: "Amazon Clone (A2Z Store)",
      description: "E-commerce platform built with React, Redux, and Django, achieving 70% boost in online sales",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=2078",
      // video: {
      //   url: "/assets/videos/amazon-clone.mp4",
      //   thumbnail: "/assets/images/amazon-clone-thumbnail.png"
      // },
      tags: ["React", "Redux", "Django", "E-commerce"]
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with automated CI/CD using GitHub Actions and GitHub Pages deployment",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2070",
      // video: {
      //   url: "/assets/videos/portfolio.mp4",
      //   thumbnail: "/assets/images/portfolio-thumbnail.png"
      // },
      tags: ["HTML", "CSS", "JavaScript", "GitHub Actions"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              {/* Image version (currently active) */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />

              {/* Video version (commented out for future use) */}
              {/* <div className="relative w-full h-48">
                <video
                  className="w-full h-full object-cover"
                  poster={project.video.thumbnail}
                  controls
                >
                  <source src={project.video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}