import { useEffect, useRef } from "react";

function BinaryRain({ active }) {

    const canvasRef = useRef(null);

    const particlesRef = useRef([]);

    const animationFrameRef = useRef(null);

    const modeRef = useRef("idle");

    useEffect(() => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        function resizeCanvas() {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        }

        function createParticles() {

            const particles = [];

            const amount =
                Math.floor(window.innerWidth / 12);

            for (let i = 0; i < amount; i++) {

                particles.push({

                    x:
                        Math.random() *
                        canvas.width,

                    y:
                        -Math.random() *
                        canvas.height,

                    targetY:
                        Math.random() *
                        canvas.height,

                    speed:
                        2 + Math.random() * 3,

                    size:
                        12 + Math.random() * 8,

                    value:
                        Math.random() > 0.5
                            ? "0"
                            : "1",

                    opacity:
                        0.15 +
                        Math.random() * 0.25,

                    settled: false,

                    clearing: false

                });

            }

            particlesRef.current = particles;

        }

        function drawParticle(particle) {

            ctx.font =
                `${particle.size}px monospace`;

            ctx.fillStyle =
                `rgba(0, 255, 136, ${particle.opacity})`;

            ctx.fillText(
                particle.value,
                particle.x,
                particle.y
            );

        }

        function animateRain() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            let stillMoving = false;

            particlesRef.current.forEach(
                (particle) => {

                    if (!particle.settled) {

                        stillMoving = true;

                        const distance =
                            particle.targetY -
                            particle.y;

                        particle.speed +=
                            distance * 0.002;

                        particle.speed *= 0.97;

                        particle.y +=
                            particle.speed;

                        if (
                            Math.abs(distance) < 1 &&
                            Math.abs(particle.speed) < 0.5
                        ) {

                            particle.y =
                                particle.targetY;

                            particle.speed = 0;

                            particle.settled =
                                true;

                        }

                    }

                    drawParticle(particle);

                }
            );

            if (stillMoving) {

                animationFrameRef.current =
                    requestAnimationFrame(
                        animateRain
                    );

            }

        }

        function animateClear() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            let stillClearing = false;

            particlesRef.current.forEach(
                (particle) => {

                    if (
                        particle.y > -100
                    ) {

                        stillClearing = true;

                        /*
                         * Reverse the direction
                         * of the rain.
                         */
                        particle.speed -= 0.08;

                        particle.y +=
                            particle.speed;

                        /*
                         * Slowly fade the particles
                         * as they leave the screen.
                         */
                        particle.opacity *= 0.98;

                    }

                    if (
                        particle.y > -100
                    ) {

                        drawParticle(particle);

                    }

                }
            );

            if (stillClearing) {

                animationFrameRef.current =
                    requestAnimationFrame(
                        animateClear
                    );

            } else {

                particlesRef.current = [];

                modeRef.current = "idle";

                ctx.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

            }

        }

        function startRain() {

            cancelAnimationFrame(
                animationFrameRef.current
            );

            createParticles();

            modeRef.current = "rain";

            animateRain();

        }

        function startClear() {

            if (
                particlesRef.current.length === 0
            ) {
                modeRef.current = "idle";
                return;
            }

            cancelAnimationFrame(
                animationFrameRef.current
            );

            particlesRef.current.forEach(
                (particle) => {

                    particle.settled = false;

                    particle.speed =
                        -1 -
                        Math.random() * 2;

                }
            );

            modeRef.current = "clear";

            animateClear();

        }

        resizeCanvas();

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        canvas.startRain = startRain;
        canvas.startClear = startClear;

        return () => {

            cancelAnimationFrame(
                animationFrameRef.current
            );

            window.removeEventListener(
                "resize",
                resizeCanvas
            );

        };

    }, []);

    useEffect(() => {

        const canvas = canvasRef.current;

        if (!canvas) return;

        if (active) {

            canvas.startRain?.();

        } else {

            canvas.startClear?.();

        }

    }, [active]);


    return (

        <canvas
            ref={canvasRef}
            className="binary-rain"
        />

    );

}

export default BinaryRain;