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
        textDecoration: 'none',
        color: 'white',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
    },
    projectItemPress: {
        transform: 'scale(0.97)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
        backgroundColor: '#444',
    },
    projectImage: {
        width: '250px',
        height: '130px',
        marginRight: '20px',
        borderRadius: '8px',
        objectFit: 'cover',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    projectImageMob: {
        width: '250px',
        height: '130px',
        marginRight: '20px',
        borderRadius: '8px',
        objectFit: 'cover',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    projectImagePress: {
        transform: 'scale(0.95)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
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
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const projects = [
        {
            title: 'React Portfolio',
            image: '/ReactPortfolio.png',
            description:
                "This website's code - A responsive and interactive personal portfolio website to showcase my software development projects and skills.",
            technologies: 'React, Node.js, HTML, CSS, and JavaScript',
            link: 'https://github.com/KashyapChilivoju/react-portfolio',
        },
        {
            title: 'GearSync',
            image: '/GearSync.png',
            description:
                'An application designed for car dealerships to manage, maintain, and add to dealer stock.',
            technologies:
                'C#, .NET Core, JavaScript, Svelte, JWT, ASP.NET, SQLite, Dapper, and Fast-Endpoints',
            link: 'https://github.com/KashyapChilivoju/GearSync',
        },
        {
            title: 'Register & Login PHP',
            image: '/RegisterLoginPHP.png',
            description:
                'A secure user authentication system for web applications, featuring registration, login, and password management functionalities.',
            technologies: 'PHP, HTML, CSS',
            link: 'https://github.com/KashyapChilivoju/RegisterLoginPHP',
        },
    ];

    return (
        <div style={styles.container}>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    style={{
                        ...styles.projectItem,
                        ...(hoveredIndex === index ? styles.projectItemPress : {}),
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            ...styles.projectImage,
                            ...(hoveredIndex === index ? styles.projectImagePress : {}),
                        }}
                    />
                    <div style={styles.projectDetails}>
                        <h2>{project.title}</h2>
                        <p style={styles.projectDescription}>{project.description}</p>
                        <p style={styles.technologyList}>
                            Technologies Used: {project.technologies}
                        </p>
                    </div>
                </a>
            ))}
            <p style={styles.projectDescription}>More projects coming soon!</p>
        </div>
    );
}

export default Projects;
