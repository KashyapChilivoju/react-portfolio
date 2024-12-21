import React from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '20px',
        padding: '20px',
        textAlign: 'center',
        transition: 'opacity 0.5s ease-out',
        opacity: 0.1,
        margin: 'auto',
        overflow: 'hidden',
        background: 'linear-gradient(-45deg, #ff6f61, #ffb400, #4ecdc4, #1a535c)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
    },
    image: {
        maxWidth: '200px',
        borderRadius: '50%',
        marginBottom: '20px',
        transition: 'opacity 0.5s ease-in-out',
        opacity: 0,
        border: '3px solid #fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
    },
    textBlock: {
        margin: '10px 0',
        fontSize: '32px',
        padding: '10px',
        borderRadius: '5px'
    },
    keyframes: `@keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }`
};


function About() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <div style={{ position: 'relative' }}>
            <style>{styles.keyframes}</style>
            <div style={{ ...styles.container, opacity: inView ? 1 : 0.1 }} ref={ref}>
                <img src="/Profile.jpeg" alt="Kashyap Chilivoju"
                    style={{ ...styles.image, opacity: inView ? 1 : 0 }} />
                <h1>About Me</h1>
                <div style={styles.textBlock}>
                    <p>I am a software engineer with a passion for building beautiful and functional web applications.</p>
                    <p>Aspiring software engineer with expertise in Full-Stack Development. My academic journey began with challenges; however, these experiences have since fueled my determination and significantly honed my problem-solving skills and technical expertise. I am excited to demonstrate and showcase my prowess in the Software Engineering Industry.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
