import { useEffect, useState } from "react";

function TypingText({text}) {

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {

    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {

        if (index < text.length) {

            setDisplayText(text.substring(0, index + 1));

            index++;

        } else {

            clearInterval(interval);

        }

    }, 100);


    return () => clearInterval(interval);

}, [text]);

    return (

        <h1>
            {displayText}
            <span className="typing-cursor"></span>
        </h1>

    );

}

export default TypingText;