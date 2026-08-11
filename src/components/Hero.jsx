import { useState } from "react";
import TypingText from "./TypingText";

function Hero({ name, title }) {

    return (

        <section className="hero">

            <div>

                <TypingText
                    text={`hi, ${name} here`}
                />

                <p className="hero-subtitle">
                    {title}
                </p>

                <p className="hero-tagline">
                    I build software, games, and other things.
                </p>

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