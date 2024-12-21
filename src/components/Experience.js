import React from 'react';
import { useInView } from 'react-intersection-observer';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        color: '#333',
        fontSize: '16px',
        padding: '40px 20px',
        textAlign: 'left',
        transition: 'opacity 0.5s ease-out',
        opacity: 0.1,
        maxWidth: '1400px',
        margin: 'auto',
        position: 'relative',
    },
    grid: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    column: {
        flex: '1 1 45%',
        marginBottom: '40px',
        padding: '0 20px',
    },
    heading: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    subheading: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    text: {
        marginBottom: '10px',
    },
    listItem: {
        marginBottom: '5px',
    },
    divider: {
        width: '100%',
        height: '2px',
        backgroundColor: '#333',
        margin: '20px 0',
    },
    vdivider: {
        width: '2px',
        height: 'auto',
        backgroundColor: '#333',
        margin: '0 20px',
    },
    keyframes: `@keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }`,
};

function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <div style={{ position: 'relative' }}>
            <style>{styles.keyframes}</style>
            <div style={{ ...styles.container, opacity: inView ? 1 : 0.1 }} ref={ref}>
                <h1 style={styles.heading}>Experience & Skills</h1>
                <div style={styles.divider}></div>
                <div style={styles.grid}>
                    <div style={styles.column}>
                        <h2 style={styles.subheading}>Professional Experience</h2>
                        <p style={styles.text}><strong>Novas Arc IT Consulting Services (June 2024 - Present)</strong></p>
                        <p style={styles.text}>Software Engineer Intern</p>
                        <ul>
                            <li style={styles.listItem}>Developed feature-rich, scalable, and secure web applications using React.js and Redux for state management.</li>
                            <li style={styles.listItem}>Designed and implemented RESTful APIs using Node.js and Express, integrating with databases such as PostgreSQL and MongoDB for robust data management.</li>
                            <li style={styles.listItem}>Participated in the design and development of microservices architectures, improving system scalability and maintainability.</li>
                            <li style={styles.listItem}>Implemented comprehensive unit and integration tests using Jest and React Testing Library.</li>
                            <li style={styles.listItem}>Enhanced security measures of web applications by integrating OAuth and JWT for authentication and authorization processes.</li>
                        </ul>
                        <p style={styles.text}><strong>Telstra (2019 - Present)</strong></p>
                        <p style={styles.text}>Tech Bar Advisor / Sales Consultant</p>
                        <ul>
                            <li style={styles.listItem}>Providing technical support and advice to customers.</li>
                            <li style={styles.listItem}>Showcasing the latest technology and developing customized solutions.</li>
                            <li style={styles.listItem}>Managing stock and inventory, team, and store operations.</li>
                            <li style={styles.listItem}>Ensuring compliance and maintaining a high level of customer satisfaction.</li>
                            <li style={styles.listItem}>Meeting KPIs and achieving sales targets.</li>
                            <li style={styles.listItem}>Recognized as Employee of the Month 21 times.</li>
                        </ul>
                        
                    </div>
                    <div style={styles.vdivider}></div> 
                    <div style={styles.column}>
                        <h2 style={styles.subheading}>Education</h2>
                        <p style={styles.text}><strong>RMIT University (2017 - 2025 Expected)</strong></p>
                        <p style={styles.text}><b>Tertiary Education - Bachelor of Software Engineering</b></p>
                        <p style={styles.text}><b>Majors:</b> Full Stack Web/Software Development and Machine Learning</p>
                        <p style={styles.text}><strong>Dandenong High School (2013 - 2016)</strong></p>
                        <p style={styles.text}><b>Secondary Education - VCE Year 12</b></p>
                        <p style={styles.text}><b>Subjects:</b> English, Specialist Mathematics, Mathematical Methods, Physics, Chemistry</p>
                        <div style={styles.divider}></div>
                        <h2 style={styles.subheading}>Technical Skills</h2>
                        <p style={styles.text}><b>Languages:</b> Java, C#, C, C++, Python, TypeScript, JavaScript, HTML, CSS, PHP</p>
                        <p style={styles.text}><b>Frameworks:</b> Spring Boot, .NET Core, React, Node, Vue, Angular, Express, Django</p>
                        <p style={styles.text}><b>Databases:</b> SQL, MongoDB, PostgreSQL, DynamoDB, NoSQL, JDBC, Firebase</p>
                        <p style={styles.text}><b>Cloud:</b> AWS (EC2, S3, RDS, Lambda), Azure, Google Cloud Platform</p>
                        <p style={styles.text}><b>DevOps:</b> Docker, Jenkins, CircleCI, Git, GitHub, GitLab</p>
                        <p style={styles.text}><b>Other:</b> REST APIs, GraphQL, Agile methodologies, Microservices, TDD, OAuth, JWT</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
