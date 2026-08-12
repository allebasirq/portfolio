import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectShowcase from "./ProjectShowcase";
import nexusConnectImage from "../assets/NexusContact.png";
import atonedIcarusImage from "../assets/AtonedIcarus.png";
import portfolioImage from "../assets/Portfolio.png";

function Projects() {

    const projects = [
        
        {
            id: 1,
            title: "NexusContact: Contact Manager",
            description: "A full-stack contact management application that allows users to securely register, log in, and manage their personal contacts. I engineered backend validation routines and data-processing logic to handle essential application states (CRUD workflow), ensuring smooth information routing.",
            image: nexusConnectImage,
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB"]
        },
        {
            id: 2,
            title: "AI: Atoned Icarus",
            description: "A Unity-developed stealth game where players navigate challenging environments, evade AI-driven enemies, and use tools and environmental interactions to progress. I developed scripts to implement core gameplay systems, including player movement, stealth mechanics, taser combat, checkpoints, inventory, and environmental interactions.",
            image: atonedIcarusImage,
            technologies: ["C#", "Unity"]
        },
        {
            id: 3,
            title: "Personal Portfolio",
            description: "Independently designed and developed my first personal portfolio website to showcase my projects, skills, and growth as a Computer Science student.",
            image: portfolioImage,
            technologies: ["JavaScript", "React", "HTML", "CSS", "Vite"]
        }

    ];

    const [currentProject, setCurrentProject] = useState(0);

    return(

        <>

        <div className="project-board">

            <ProjectCard
                title= {
                    <>
                    <span className="highlight">{projects[currentProject].title}</span>
                    </>
                }
                description={projects[currentProject].description}
                image={projects[currentProject].image}
                technologies={projects[currentProject].technologies}
            />

            <div className="project-controls">

                <button
                    onClick={() =>
                        setCurrentProject(
                            (currentProject - 1 + projects.length) % projects.length
                        )
                    }
                >
                    ←
                </button>

                <span>
                    {currentProject + 1} / {projects.length}
                </span>

                <button
                    onClick={() =>
                        setCurrentProject(
                            (currentProject + 1) % projects.length
                        )
                    }
                >
                    →
                </button>

            </div>

        </div>
        
        <h2 className="other-projects-title">
            Non-visual Projects
        </h2>

        <div className="other-projects">

            <ProjectShowcase
                title="PL/0 Compiler and Code Generator (C)"
                description="Developed a compiler for the PL/0 programming language, integrating lexical analysis, recursive-descent parsing,
semantic analysis, and code generation into a single executable."
            />

            <ProjectShowcase
                title=
                    "PM/0 Stack-Based Virtual Machine Implementation (C)"
                description="Interpreted a fixed instruction set with procedure calls, control flow, and activation record-based stack management"
            />

            <ProjectShowcase
                title="MIPS Processor Simulator (MySPIM)"
                description="Simulated execution of MIPS machine code cycle-by-cycle using the C programming language, including Datapath operations and control signal
management"
            />

        </div>

        </>
    );

}

export default Projects;