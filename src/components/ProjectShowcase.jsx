function ProjectShowcase({ title, description }) {

    return (

        <article className="project-showcase">

            <h3>
                <span className="highlight">{title}</span>
            </h3>

            <p>
                - {description}
            </p>

        </article>

    );

}

export default ProjectShowcase;