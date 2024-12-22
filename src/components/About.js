import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(circle, #e8f0f2, #d1e7ec, #a8d5e2, #85c3da)',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        overflow: 'hidden',
        padding: '20px',
    },
    card: {
        background: '#ffffff',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '15px',
        padding: '30px',
        maxWidth: '60%',
        transition: 'transform 1s ease, opacity 1s ease',
        opacity: 0,
        transform: 'translateY(30px)',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        margin: '20px auto',
        border: '5px solid #3498db',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 1s ease, opacity 1s ease',
        opacity: 0,
        transform: 'scale(0.9)',
    },
    title: {
        fontSize: '32px',
        color: '#3498db',
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '24px',
        color: '#555',
        marginBottom: '20px',
    },
    textBlock: {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
    },
    keyframes: `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `,
};

function About() {
    const [animationTrigger, setAnimationTrigger] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false, // Allow the animation to re-trigger
        threshold: 0.2,
        onChange: (isInView) => {
            if (isInView) {
                setAnimationTrigger(true); // Start animation
            } else {
                setAnimationTrigger(false); // Reset animation
            }
        },
    });

    return (
        <div style={styles.container}>
            <style>{styles.keyframes}</style>
            <div
                style={{
                    ...styles.card,
                    opacity: animationTrigger ? 1 : 0,
                    transform: animationTrigger ? 'translateY(0)' : 'translateY(30px)',
                }}
                ref={ref}
            >
                <img
                    src="/Profile.jpeg"
                    alt="Kashyap Chilivoju"
                    style={{
                        ...styles.image,
                        opacity: animationTrigger ? 1 : 0,
                        transform: animationTrigger ? 'scale(1)' : 'scale(0.9)',
                    }}
                />
                <h1 style={styles.title}>About Me</h1>
                <h3 style={styles.subtitle}>
                    Aspiring Software Engineer | Full-Stack Developer
                </h3>
                <div style={styles.textBlock}>
                    <p>
                        I'm a software engineer with a passion for crafting innovative and functional
                        web applications. My journey in software engineering has been both challenging
                        and rewarding, fueling my determination to excel in the industry.
                    </p>
                    <p>
                        Through perseverance and continuous learning, I've honed my problem-solving
                        skills and technical expertise. I'm excited to showcase my talents and
                        contribute to impactful projects.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
