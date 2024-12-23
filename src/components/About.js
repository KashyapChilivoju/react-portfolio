import React, { useState, useEffect } from 'react';
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
        maxWidth: '70%',
        width: '100%',
        height: '650px',
        transition: 'opacity 1s ease, transform 1s ease',
        opacity: 0,
        transform: 'translateY(30px)',
    },
    image: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        margin: '20px auto',
        border: '8px solid #3498db',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 1s ease, opacity 1s ease',
        opacity: 0,
        transform: 'scale(0.6)',
    },
    title: {
        fontSize: '36px',
        color: '#3498db',
        marginBottom: '15px',
        fontWeight: 'bold',
        whiteSpace: 'pre-wrap',
    },
    subtitle: {
        fontSize: '28px',
        color: '#555',
        marginBottom: '20px',
        whiteSpace: 'pre-wrap',
    },
    textBlock: {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.6',
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
    },
    mediaQueries: `
        @media (max-width: 768px) {
            .responsive-card {
                padding: 20px;
                max-width: 90%;
            }
            .responsive-image {
                width: 150px;
                height: 150px;
            }
            .responsive-title {
                font-size: 28px;
            }
            .responsive-subtitle {
                font-size: 20px;
            }
            .responsive-text {
                font-size: 16px;
            }
        }
    `,
};

function useTypewriterEffect(text, inView, speed = 100) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = -1;
        let interval;

        if (inView) {
            setDisplayedText(''); // Reset text when re-entering
            interval = setInterval(() => {
                if (index < text.length-1) {
                    index++;
                    setDisplayedText((prev) => prev + text[index]);

                } else {
                    clearInterval(interval);
                }
            }, speed);
        } else {
            setDisplayedText(''); // Clear text when out of view
        }

        return () => clearInterval(interval);
    }, [inView, text, speed]);

    return displayedText;
}

function About() {
    const { ref, inView } = useInView({
        triggerOnce: false, // Allow re-triggering
        threshold: 0.2,
    });

    const titleText = "Kashyap Chilivoju";
    const subtitleText = "Software Engineering Student | Full-Stack Developer";
    const descriptionText =
        "I'm a software engineer with a passion for crafting innovative and functional web applications. My journey in software engineering has been both challenging and rewarding, fueling my determination to excel in the industry.\n\nThrough perseverance and continuous learning, I've honed my problem-solving skills and technical expertise. I'm excited to showcase my talents and contribute to impactful projects.";

    const renderedTitle = useTypewriterEffect(titleText, inView, 80);
    const renderedSubtitle = useTypewriterEffect(subtitleText, inView, 80);
    const renderedDescription = useTypewriterEffect(descriptionText, inView, 25);

    return (
        <div style={styles.container}>
            <style>{styles.mediaQueries}</style>
            <div
                className="responsive-card"
                style={{
                    ...styles.card,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(30px)',
                }}
                ref={ref}
            >
                <img
                    src="/Profile.jpeg"
                    alt="Kashyap Chilivoju"
                    className="responsive-image"
                    style={{
                        ...styles.image,
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'scale(1.2)' : 'scale(0.6)',
                    }}
                />
                <h1 style={styles.title}>{renderedTitle}</h1>
                <h3 style={styles.subtitle}>{renderedSubtitle}</h3>
                <div style={styles.textBlock}>{renderedDescription}</div>
            </div>
        </div>
    );
}

export default About;
