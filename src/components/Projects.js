import React from 'react';

const styles = {
    container: {
        height: 'auto', // Adjusted for content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: 'white',
        fontSize: '16px',
        padding: '40px 20px', // Increased padding for better spacing
        position: 'relative',
        overflow: 'hidden',
    },
    projectItem: {
        margin: '20px 0',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#333', // Slightly lighter background for each item
        width: '80%', // Limit width for better readability
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Subtle shadow for 3D effect
    },
    projectLink: {
        color: '#4CAF50', // Green color for links
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    projectDescription: {
        marginTop: '10px',
        fontSize: '14px',
        lineHeight: '1.6', // Improved line spacing for readability
    },
    technologyList: {
        marginTop: '5px',
        fontSize: '14px',
        fontStyle: 'italic', // Style for technology listing
    },
};

function Projects() {
    return (
        <div style={styles.container}>
            <h1>Projects</h1>
            <div style={styles.projectItem}>
                <a href="https://github.com/KashyapChilivoju/react-portfolio" style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    React Portfolio
                </a>
                <p style={styles.projectDescription}>
                    This websites code - A personal portfolio website to showcase my software development projects and skills. Features a responsive design and interactive elements to engage visitors.
                </p>
                <p style={styles.technologyList}>
                    Technologies Used: React, HTML, CSS and JavaScript
                </p>
            </div>
            <div style={styles.projectItem}>
                <a href="https://github.com/KashyapChilivoju/GearSync" style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    GearSync
                </a>
                <p style={styles.projectDescription}>
                    An application designed for car dealerships to manage, maintain and add to dealer stock.
                </p>
                <p style={styles.technologyList}>
                    Technologies Used: C#, .NET Core, Javascript, Svelte, JWT, ASP.NET, SQLite, Dapper and Fast-Endpoints
                </p>
            </div>
            <div style={styles.projectItem}>
                <a href="https://github.com/KashyapChilivoju/RegisterLoginPHP" style={styles.projectLink} target="_blank" rel="noopener noreferrer">
                    Register & Login PHP
                </a>
                <p style={styles.projectDescription}>
                    A secure user authentication system for web applications, featuring registration, login, and password management functionalities.
                </p>
                <p style={styles.technologyList}>
                    Technologies Used: PHP, HTML, CSS
                </p>
            </div>
            <p style={styles.projectDescription}>More projects coming soon!</p>
        </div>
    );
}

export default Projects;
