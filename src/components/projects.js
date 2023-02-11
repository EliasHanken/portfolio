import "./projects.css";
import { Icon } from "@iconify/react";

const projects = [
  {
    title: "Open AI Dall-E Clone",
    description:
      "Open AI Image generation with community showcase, you can generate stunning images with prompts and share them for others to see.",
    image:
      "https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png",
    link: "https://streafe.github.io/dalle-clone/",
    tech: [
      "vscode-icons:file-type-node",
      "logos:mongodb",
      "logos:cloudinary",
      "vscode-icons:file-type-vite",
      "skill-icons:javascript",
      "simple-icons:openai",
    ],
  },
];

const Projects = () => (
  <div className="projects-div">
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
            <p className="link-text-project">
              https://streafe.github.io/dalle-clone/
            </p>
            <div className="icons-container">
              {project.tech.map((icon, i) => (
                <Icon key={i} className="project-logo-tech" icon={icon} />
              ))}
            </div>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
