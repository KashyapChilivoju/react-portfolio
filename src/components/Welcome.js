import React from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        transition: 'opacity 2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxSizing: 'border-box',
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 4s ease infinite',
        zIndex: -2,
    },
    keyframes: `
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes pulsate {
            0% { transform: scale(1.1); opacity: 1; }
            50% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.1); opacity: 1; }
        }
    `,
    text: {
        zIndex: 10,
        color: 'white',
        textAlign: 'center',
        fontSize: 'calc(42px + 3vmin)',
        position: 'absolute',
        animation: 'pulsate 4s infinite',
        pointerEvents: 'none',
    },
};

function WelcomePage() {
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

            <h1 style={styles.text}>Welcome to Kashyap Chilivoju's Portfolio</h1>
        </div>
    );
}

export default WelcomePage;