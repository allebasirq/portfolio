function ExperienceTimeline() {

    const experiences = [
        {
            year: "Aug 2026 - Present",
            title: "Teaching Assistant - Security in Computing",
            organization: "College of Engineering and Computer Science, UCF",
            description1: "Support students through scheduled office hours by answering questions, clarifying course concepts, and providing academic guidance.",
            description2: "Assist with grading assignments and other course responsibilities while helping maintain a supportive and effective learning environment."
        },
        {
            year: "May - Aug 2026",
            title: "Supplemental Instruction Leader - Computer Science I",
            organization: "Student Academic Resource Center, SARC UCF",
            description1: "Facilitate 4 weekly Supplemental Instruction (SI) sessions for 200+ students enrolled in Data Structures and Algorithms course using the C programming language",
            description2: "Developed exam review materials and led three exam review sessions throughout the term to help students strengthen their understanding of course concepts and prepare for assessments."
        }
    ];

    return (

        <div className="experience-timeline">

            {experiences.map((experience, index) => (

                <div className="timeline-item" key={index}>

                    <div className="timeline-year">
                        {experience.year}
                    </div>

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <h3>
                            {experience.title}
                        </h3>

                        <h4>
                            {experience.organization}
                        </h4>

                        <p>
                            - {experience.description1}
                        </p>

                        <p>
                            - {experience.description2}
                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default ExperienceTimeline;