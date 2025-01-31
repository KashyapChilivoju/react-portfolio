import React from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

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
        width: '100%',
        boxSizing: 'border-box',
    },
    projectItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#333',
        width: '100%',
        maxWidth: '900px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        textDecoration: 'none',
        color: 'white',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
        boxSizing: 'border-box',
    },
    projectItemHover: {
        transform: 'scale(1.03)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        backgroundColor: '#444',
    },
    projectItemMobile: {
        flexDirection: 'column',
        width: '90%',
        textAlign: 'center',
    },
    projectImage: {
        width: '40%',
        maxWidth: '250px',
        height: 'auto',
        marginRight: '20px',
        borderRadius: '8px',
        objectFit: 'contain',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    projectImageHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    },
    projectImageMobile: {
        width: '100%',
        maxWidth: '100%',
        margin: '10px 0',
    },
    projectDetails: {
        flex: '1',
        textAlign: 'left',
    },
    projectDetailsMobile: {
        textAlign: 'center',
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
    const isMobile = useIsMobile();

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
                        ...(isMobile ? styles.projectItemMobile : {}),
                        ...(hoveredIndex === index && !isMobile ? styles.projectItemHover : {}),
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    {isMobile ? (
                        // Mobile Layout: Title → Image → Description
                        <>
                            <div style={styles.projectDetailsMobile}>
                                <h2>{project.title}</h2>
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    ...styles.projectImage,
                                    ...styles.projectImageMobile,
                                    ...(hoveredIndex === index && !isMobile
                                        ? styles.projectImageHover
                                        : {}),
                                }}
                            />
                            <div style={styles.projectDetailsMobile}>
                                <p style={styles.projectDescription}>{project.description}</p>
                                <p style={styles.technologyList}>
                                    Technologies Used: {project.technologies}
                                </p>
                            </div>
                        </>
                    ) : (
                        // Regular Layout: Image Left, Text Right
                        <>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    ...styles.projectImage,
                                    ...(hoveredIndex === index && !isMobile
                                        ? styles.projectImageHover
                                        : {}),
                                }}
                            />
                            <div style={styles.projectDetails}>
                                <h2>{project.title}</h2>
                                <p style={styles.projectDescription}>{project.description}</p>
                                <p style={styles.technologyList}>
                                    Technologies Used: {project.technologies}
                                </p>
                            </div>
                        </>
                    )}
                </a>
            ))}
            <p style={styles.projectDescription}>More projects coming soon!</p>
        </div>
    );
}

export default Projects;
