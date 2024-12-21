import React from 'react';

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: 'white',
        fontSize: '16px',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
    },
    comingSoon: {
        fontSize: '24px',
        margin: '20px 0',
    },
    fireworks: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
    },
};

function Projects() {
    return (
        <div style={styles.container}>
            <h1>Projects</h1>
            <p style={styles.comingSoon}>Coming Soon!</p>
        </div>
    );
}

export default Projects;
