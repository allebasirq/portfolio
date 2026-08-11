function ProjectCard({ title, description, image, technologies }) {

    return (

        <article className="project-card">

            <img
                src={image}
                alt={title}
                className="project-image"
            />

            <h3>
                {title}
            </h3>

            <p>
                {description}
            </p>

            <div className="project-technologies">

                <div className="technology-list">

                    {technologies.map((technology, index) => (
                        <span key={index}>
                            {technology}
                        </span>
                    ))}

                </div>

            </div>

        </article>

    );

}

export default ProjectCard;