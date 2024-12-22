import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 7s ease infinite',
        zIndex: -2,
    },
    keyframes: `
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes pulsate {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
        }
    `,
    text: {
        zIndex: 10,
        color: 'white',
        textAlign: 'center',
        fontSize: 'calc(42px + 3vmin)',
        position: 'absolute',
        animation: 'pulsate 7s infinite',
        pointerEvents: 'none',
    },
};

function GlitterEffect() {
    const canvasRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        const createParticle = (x, y) => {
            particles.push({
                x,
                y,
                size: Math.random() * 5 + 1,
                opacity: 1,
                velocityX: (Math.random() - 0.5) * 2,
                velocityY: (Math.random() - 0.5) * 2,
                fade: Math.random() * 0.05 + 0.01,
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, i) => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(228, 182, 0, ${particle.opacity})`;
                ctx.fill();

                particle.x += particle.velocityX;
                particle.y += particle.velocityY;
                particle.opacity -= particle.fade;

                if (particle.opacity <= 0) {
                    particles.splice(i, 1);
                }
            });
        };

        const animate = () => {
            drawParticles();
            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            for (let i = 0; i < 5; i++) {
                createParticle(e.clientX, e.clientY);
            }
            if (textRef.current) {
                textRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <div
            style={{
                ...styles.container,
                opacity: inView ? 1 : 0.1,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
            }}
            ref={ref}
        >
            <style>{styles.keyframes}</style>
            <div style={styles.gradientBackground}></div>
            <canvas ref={canvasRef} style={styles.canvas}></canvas>
            <h1 ref={textRef} style={styles.text}>
                Welcome to Kashyap Chilivoju's Portfolio
            </h1>
        </div>
    );
}

export default GlitterEffect;
