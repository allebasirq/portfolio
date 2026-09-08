import TypingText from "./TypingText";

function Hero({ name, title, minor }) {

    return (

        <section className="hero">

            <div>

                <TypingText
                    text={`hi, ${name} here`}
                />

                <span>

                    <h2 className="hero-subtitle">
                        {title}
                    </h2>

                    <h3 className="hero-subtitle">
                        {minor}
                    </h3>

                </span>

                <h4 className="hero-tagline">
                    I build software, games, and other things
                </h4>

                <a
                    href="mailto:isabellarquesada@gmail.com"
                    className="hero-email-button"
                >
                    ✉ Let's talk
                </a>

            </div>

        </section>

    );

}

export default Hero;