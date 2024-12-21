import React from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: 'white',
        fontSize: 'calc(10px + 2vmin)',
        textAlign: 'center',
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        transition: 'opacity 0.5s ease-out',
        opacity: 1,
    },
    keyframes: `@keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }`
};

function Welcome() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <div style={{ position: 'relative' }}>
            <style>{styles.keyframes}</style>
            <div style={{ ...styles.container, opacity: inView ? 1 : 0.1 }} ref={ref}>
                <h1>Welcome to Kashyap Chilivoju's Portfolio</h1>
                <p>Discover my world of coding and design.</p>
            </div>
        </div>
    );
}

export default Welcome;
