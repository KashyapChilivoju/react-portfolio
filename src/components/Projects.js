import React from 'react';

const styles = {
    container: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        color: 'white',
        fontSize: '16px',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
    },
    projectItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#333',
        width: '80%',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        textDecoration: 'none', // Ensure text inside remains styled
        color: 'white', // Ensure text color stays consistent
    },
    projectImage: {
        width: '150px',
        height: '150px',
        marginRight: '20px',
        borderRadius: '8px',
        objectFit: 'cover',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    projectDetails: {
        flex: '1',
    },
    projectDescription: {
        marginTop: '10px',
        fontSize: '14px',
        lineHeight: '1.6',
    },
    technologyList: {
        marginTop: '5px',
        fontSize: '14px',
        fontStyle: 'italic',
    },
};

function Projects() {
    return (
        <div style={styles.container}>
            <h1>Projects</h1>
            <a
                href="https://github.com/KashyapChilivoju/react-portfolio"
                style={styles.projectItem}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src="/ReactPortfolio.png" 
                    alt="React Portfolio" 
                    style={styles.projectImage} 
                />
                <div style={styles.projectDetails}>
                    <h2>React Portfolio</h2>
                    <p style={styles.projectDescription}>
                        This website's code - A responsive and interactive personal portfolio website to showcase my software development projects and skills.
                    </p>
                    <p style={styles.technologyList}>
                        Technologies Used: React, Node.js, HTML, CSS, and JavaScript
                    </p>
                </div>
            </a>
            <a
                href="https://github.com/KashyapChilivoju/GearSync"
                style={styles.projectItem}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src="/GearSync.png" 
                    alt="GearSync" 
                    style={styles.projectImage} 
                />
                <div style={styles.projectDetails}>
                    <h2>GearSync</h2>
                    <p style={styles.projectDescription}>
                        An application designed for car dealerships to manage, maintain, and add to dealer stock.
                    </p>
                    <p style={styles.technologyList}>
                        Technologies Used: C#, .NET Core, JavaScript, Svelte, JWT, ASP.NET, SQLite, Dapper, and Fast-Endpoints
                    </p>
                </div>
            </a>
            <a
                href="https://github.com/KashyapChilivoju/RegisterLoginPHP"
                style={styles.projectItem}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src="/RegisterLoginPHP.png" 
                    alt="Register & Login PHP" 
                    style={styles.projectImage} 
                />
                <div style={styles.projectDetails}>
                    <h2>Register & Login PHP</h2>
                    <p style={styles.projectDescription}>
                        A secure user authentication system for web applications, featuring registration, login, and password management functionalities.
                    </p>
                    <p style={styles.technologyList}>
                        Technologies Used: PHP, HTML, CSS
                    </p>
                </div>
            </a>
            <p style={styles.projectDescription}>More projects coming soon!</p>
        </div>
    );
}

export default Projects;
