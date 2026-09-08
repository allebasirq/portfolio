import Hero from "../components/Hero";
import Projects from "../components/Projects";
import BackgroundShape from "../components/BackgroundShape";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Honors from "./Honors";
import BinaryGame from "../components/BinaryGame";


function Home() {

    return (

        <>

            <title>
                Isabella's Portfolio
            </title>

            <section id="home" className="section-container">

                <BackgroundShape
                    color="#00ff88"
                    className="shape-left"
                />

                <Hero
                    name="Isabella"
                    title="Computer Science Student · Mathematics Minor"
                />

            </section>

            <Reveal>

                <section id="about" className="section-container">

                    <BackgroundShape
                        color="#00ffaa"
                        className="shape-right"
                    />

                    <SectionTitle>
                        About Me
                    </SectionTitle>

                    <p>
                        I'm a senior <span className="highlight">Computer Science</span> student from the <span className="highlight">University of Central Florida (UCF)</span>,
                        fascinated by the process of turning complex problems into simple, working solutions.
                        When I'm not coding, you'll probably find me playing with my cats or solving a problem that I <i>probably</i> could have Googled.
                    </p>

                    <div className="skills">

                        <div className="skill-group">

                            <h4>
                                Languages
                            </h4>

                            <ul>
                                <li>Java</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>C#</li>
                                <li>JavaScript</li>
                            </ul>

                        </div>


                        <div className="skill-group">

                            <h4>
                                Web
                            </h4>

                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>

                        </div>


                        <div className="skill-group">

                            <h4>
                                Tools
                            </h4>

                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Unity</li>
                                <li>VS Code</li>
                                <li>Eclipse</li>
                                <li>Postman</li>
                            </ul>

                        </div>

                    </div>

                    <div className="coursework">

                        <div className="coursework-section">

                            <h3>
                                Relevant Coursework
                            </h3>

                            <p>
                                Data Structures & Algorithms
                                <span>·</span>
                                Object-Oriented Programming
                                <span>·</span>
                                Discrete Mathematics
                                <span>·</span>
                                Systems Software
                            </p>

                        </div>

                        <div className="coursework-section">

                            <h3>
                                Upcoming <span>(Fall 2026)</span>
                            </h3>

                            <p>
                                Database Systems
                                <span>·</span>
                                Artificial Intelligence
                                <span>·</span>
                                Computer Vision
                                <span>·</span>
                                Web-Based Information Technology
                            </p>

                        </div>

                    </div>

                </section>

            </Reveal>

            <Reveal>

                <section id="projects" className="section-container">

                    <BackgroundShape
                        color="#00ff88"
                        className="shape-left"
                    />

                    <SectionTitle>
                        Projects
                    </SectionTitle>

                    <Projects />

                </section>

            </Reveal>

            <Reveal>

                <section id="experience" className="section-container">

                    <BackgroundShape
                        color="#00ff88"
                        className="shape-right"
                    />

                    <SectionTitle>
                        Experience
                    </SectionTitle>

                    <ExperienceTimeline />

                </section>

            </Reveal>

            <Reveal>

                <section id="honors" className="section-container">

                    <BackgroundShape
                        color="#00ffaa"
                        className="shape-left"
                    />

                    <SectionTitle>
                        Honors && Awards
                    </SectionTitle>

                    <Honors />

                </section>

            </Reveal>

            <Reveal>

                <section id="game" className="section-container">

                    <BackgroundShape
                        color="#00ff88"
                        className="shape-right"
                    />

                    <SectionTitle>
                        Before we wrap up, here is a little activity...
                    </SectionTitle>

                    <p className="game-intro">
                        How fresh is your binary knowledge?
                    </p>

                    <BinaryGame />

                </section>

            </Reveal>

            <Reveal>

                <section id="contact" className="section-container">

                    <BackgroundShape
                        color="#00ffaa"
                        className="shape-left"
                    />

                    <SectionTitle>
                        Let's connect!
                    </SectionTitle>

                    <p className="contact-text">
                        Whether you want to talk about a project, technology,
                        or just say hello, feel free to reach out.
                    </p>

                    <div className="contact-icons">

                        <a
                            href="https://github.com/allebasirq"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/isabella-rodrigues-quesada-86b188b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:isabellarquesada@gmail.com"
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>

                    </div>

                </section>

            </Reveal>

            <footer className="site-footer">
                Made with <span>♥</span> by Isabella Quesada
            </footer>

        </>

    );

}

export default Home;