function HonorCard({ title, organization, date, description }) {

    return (

        <article className="honor-card">

            <div className="honor-icon">
                ✦
            </div>

            <h3>
                {title}
            </h3>

            <h4>
                {organization}
            </h4>

            <span className="honor-date">
                {date}
            </span>

            <p>
                {description}
            </p>

        </article>

    );

}

export default HonorCard;