import { useEffect, useState } from "react";

function TypingText({text}) {

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        let interval;

        const startTyping = setTimeout(() => {
            setDisplayText("");

            interval = setInterval(() => {
                if (index < text.length) {
                    setDisplayText(text.substring(0, index + 1));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 100);
        }, 0);

        return () => {
            clearTimeout(startTyping);
            clearInterval(interval);
        };

    }, [text]);

    return (

        <h1>
            {displayText}
            <span className="typing-cursor"></span>
        </h1>

    );

}

export default TypingText;