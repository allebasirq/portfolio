import HonorCard from "../components/HonorCard";

function Honors() {

    return (

        <section id="honors" className="section-container">

            <div className="honors-container">

                <HonorCard
                    title="Engineering Honor Society Member"
                    organization="FL Delta - Tau Beta Pi"
                    date="May 2026"
                    description="Member of the engineering honor society recognizing academic excellence, exemplary character, and leadership."
                />

                <HonorCard
                    title="President's Honor Roll"
                    organization="University of Central Florida"
                    date="Fall 2025, Spring 2026"
                    description="Awarded for achieving a 4.0 GPA while completing at least 12 credit hours as a full-time undergraduate student."
                />

                <HonorCard
                    title="President's List Award"
                    organization="Valencia College"
                    date="Fall 2024, Spring 2025"
                    description="Recognized for maintaining a 4.0 GPA while successfully completing at least six college credits with no failing or incomplete grades."
                />

            </div>

        </section>

    );

}

export default Honors;