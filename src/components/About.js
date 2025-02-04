import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        minHeight: '100vh',
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
        maxWidth: '75%',
        width: '100%',
        height: 'fit-content',
        minHeight: '520px',
        transition: 'opacity 1s ease, transform 1s ease',
        opacity: 0,
        transform: 'translateY(30px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '90px 30px 30px 30px',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '5px solid #3498db',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        transition: 'transform 1s ease-in-out, opacity 1s ease',
        opacity: 0,
        transform: 'scale(0.6)',
        marginBottom: '50px'
    },
    title: {
        fontSize: 'clamp(24px, 4vw, 36px)',
        color: '#3498db',
        marginBottom: '6px',
        fontWeight: 'bold',
        wordWrap: 'break-word',
    },
    subtitle: {
        fontSize: 'clamp(18px, 3vw, 28px)',
        color: '#555',
        marginBottom: '8px',
    },
    textBlock: {
        fontSize: 'clamp(14px, 2.5vw, 18px)',
        color: '#555',
        lineHeight: '1.8',
        wordWrap: 'break-word',
        
    },
    paragraph: {
        marginBottom: '15px',
    },
    mediaQueries: `
        @media (max-width: 768px) {
            .responsive-card {
                padding: 15px;
                max-width: 95%;
            }
            .responsive-image {
                width: 120px;
                height: 120px;
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
            setDisplayedText('');
            interval = setInterval(() => {
                if (index < text.length - 1) {
                    index++;
                    setDisplayedText((prev) => prev + text[index]);
                } else {
                    clearInterval(interval);
                }
            }, speed);
        } else {
            setDisplayedText('');
        }

        return () => clearInterval(interval);
    }, [inView, text, speed]);

    return displayedText;
}
function About() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const titleText = 'Kashyap Chilivoju';
    const subtitleText = 'Computer Science Graduate & Full-Stack Developer';
    const descriptionParagraphs = [
        "I'm a software engineer dedicated to developing innovative applications. I excel in problem-solving, teamwork, and adopting new technologies.",
        "This website, themed 'The Programmer's Life,' encapsulates the essence of coding. The Welcome page's heart-beating effect symbolizes long hours at the screen. The About page's typewriter effect highlights intense coding sessions. Lastly, the starry mouse effect celebrates the magical moment of successful code compilation.",
    ];

    const renderedTitle = useTypewriterEffect(titleText, inView, 80);
    const renderedSubtitle = useTypewriterEffect(subtitleText, inView, 60);

    const [firstParagraphComplete, setFirstParagraphComplete] = useState(false);
    const renderedFirstParagraph = useTypewriterEffect(
        descriptionParagraphs[0],
        inView,
        18
    );

    useEffect(() => {
        if (renderedFirstParagraph === descriptionParagraphs[0]) {
            setFirstParagraphComplete(true);
        }
    }, [renderedFirstParagraph]);

    const renderedSecondParagraph = useTypewriterEffect(
        descriptionParagraphs[1],
        renderedFirstParagraph === descriptionParagraphs[0],
        18
    );

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
                        transform: inView ? 'scale(1.6)' : 'scale(0.6)',
                    }}
                />
                <h1 style={styles.title} className="responsive-title">
                    {renderedTitle}
                </h1>
                <h3 style={styles.subtitle} className="responsive-subtitle">
                    {renderedSubtitle}
                </h3>
                <div style={styles.textBlock} className="responsive-text">
                    <p style={styles.paragraph}>{renderedFirstParagraph}</p>
                    <p style={styles.paragraph}>{renderedSecondParagraph}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
