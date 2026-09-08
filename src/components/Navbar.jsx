import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {

    return (

        <nav>

            <div className="nav-links">

                <a href="#home">
                    Home
                </a>

                <a href="#about">
                    About
                </a>

                <a href="#projects">
                    Projects
                </a>

                <a href="#experience">
                    Experience
                </a>

                <a href="#honors">
                    Honors
                </a>

                <a href="#contact">
                    Contact
                </a>

            </div>

            <div className="nav-icons">

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

            </div>

        </nav>

    );

}

export default Navbar;