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
        flexWrap: 'wrap',
        gap: '20px',
    },
    column: {
        flex: '1 1 100%',
        marginBottom: '2px',
        padding: '0 20px',
        boxSizing: 'border-box',
    },
    columnDesktop: {
        flex: '1 1 45%',
    },
    heading: {
        fontSize: 'clamp(24px, 5vw, 36px)',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    subheading: {
        fontSize: 'clamp(18px, 4vw, 28px)',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    text: {
        marginBottom: '10px',
        fontSize: 'clamp(14px, 2.5vw, 16px)',
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
        display: 'none',
        width: '2px',
        height: 'auto',
        backgroundColor: '#333',
        margin: '0 20px',
    },
    mobileDivider: {
        display: 'none',
        width: '100%',
        height: '2px',
        backgroundColor: '#333',
        margin: '20px 0',
    },
    keyframes: `@keyframes fadeIn {
0% { opacity: 0; }
100% { opacity: 1; }
}`,
};

function Experience() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    // Media query detection for PC and mobile
    const isDesktop = window.innerWidth > 768;

    return (
        <div style={{ position: 'relative' }}>
            <style>{styles.keyframes}</style>
            <div style={{ ...styles.container, opacity: inView ? 1 : 0.1 }} ref={ref}>
                <h1 style={styles.heading}>Experience & Skills</h1>
                <div style={styles.divider}></div>
                <div style={styles.grid}>
                    <div
                        style={{
                            ...styles.column,
                            ...(isDesktop ? styles.columnDesktop : {}),
                        }}
                    >
                        <h2 style={styles.subheading}>Professional Experience</h2>
                        <p style={styles.text}>
                            <strong>Novas Arc IT Consulting Services (June 2024 - Present)</strong>
                        </p>
                        <p style={styles.text}>Software Engineer Intern</p>
                        <ul>
                            <li style={styles.listItem}>
                                Developed feature-rich, scalable, and secure web applications using
                                React.js and Redux for state management.
                            </li>
                            <li style={styles.listItem}>
                                Designed and implemented RESTful APIs using Node.js and Express,
                                integrating with databases such as PostgreSQL and MongoDB for robust
                                data management.
                            </li>
                            <li style={styles.listItem}>
                                Participated in the design and development of microservices
                                architectures, improving system scalability and maintainability.
                            </li>
                            <li style={styles.listItem}>
                                Implemented comprehensive unit and integration tests using Jest and
                                React Testing Library.
                            </li>
                            <li style={styles.listItem}>
                                Enhanced security measures of web applications by integrating OAuth
                                and JWT for authentication and authorization processes.
                            </li>
                        </ul>
                        <p style={styles.text}>
                            <strong>Telstra (2019 - Present)</strong>
                        </p>
                        <p style={styles.text}>Tech Bar Advisor / Sales Consultant</p>
                        <ul>
                            <li style={styles.listItem}>Providing technical support and advice to customers.</li>
                            <li style={styles.listItem}>
                                Showcasing the latest technology and developing customized solutions.
                            </li>
                            <li style={styles.listItem}>
                                Managing stock and inventory, team, and store operations.
                            </li>
                            <li style={styles.listItem}>
                                Ensuring compliance and maintaining a high level of customer
                                satisfaction.
                            </li>
                            <li style={styles.listItem}>Meeting KPIs and achieving sales targets.</li>
                            <li style={styles.listItem}>
                                Recognized as Employee of the Month 21 times.
                            </li>
                        </ul>
                        {/* Mobile Divider */}
                        {!isDesktop && <div style={{ ...styles.divider, marginBottom: '-20px' }}></div>}
                    </div>
                    {/* Vertical Divider for Desktop */}
                    {isDesktop && <div style={{ ...styles.vdivider, display: 'inline' }}></div>}
                    <div
                        style={{
                            ...styles.column,
                            ...(isDesktop ? styles.columnDesktop : {}),
                        }}
                    >
                        <h2 style={styles.subheading}>Education</h2>
                        <p style={styles.text}>
                            <strong>RMIT University (2020 - 2024 Graduated)</strong>
                        </p>
                        <ul>
                            <li>
                                <p style={styles.text}>
                                    <b>Tertiary Education - Bachelor of Computer Science</b>
                                </p>
                            </li>
                            <li>
                                <p style={styles.text}>
                                    <b>Majors:</b> Advanced Computer Science & Enterprise Systems Development
                                </p>
                            </li>
                        </ul>
                        <p style={styles.text}>
                            <strong>RMIT University (2017 - 2019 Transferred)</strong>
                        </p>

                        <ul>
                            <li>
                                <p style={styles.text}>
                                    <b>Tertiary Education - Associate Degree in IT (Pathway)</b>
                                </p>
                            </li>
                        </ul>
                        <p style={styles.text}>
                            <strong>Dandenong High School (2013 - 2016)</strong>
                        </p>
                        <ul>
                            <li>
                                <p style={styles.text}>
                                    <b>Secondary Education - VCE Year 12</b>
                                </p>
                            </li>

                            <li>
                                <p style={styles.text}>
                                    <b>Subjects:</b> Specialist Mathematics, Mathematical Methods,
                                    Physics, Chemistry
                                </p>
                            </li>
                        </ul>
                        <div style={styles.divider}></div>
                        <h2 style={styles.subheading}>Technical Skills</h2>
                        <p style={styles.text}>
                            <b>Languages:</b> Java, C#, C, C++, Python, TypeScript, JavaScript, HTML,
                            CSS, PHP
                        </p>
                        <p style={styles.text}>
                            <b>Frameworks:</b> Spring Boot, .NET Core, React, Node, Vue, Angular,
                            Express, Django
                        </p>
                        <p style={styles.text}>
                            <b>Databases:</b> SQL, MongoDB, PostgreSQL, DynamoDB, NoSQL, JDBC,
                            Firebase
                        </p>
                        <p style={styles.text}>
                            <b>Cloud:</b> AWS (EC2, S3, RDS, Lambda), Azure, Google Cloud Platform
                        </p>
                        <p style={styles.text}>
                            <b>DevOps:</b> Docker, Jenkins, CircleCI, Git, GitHub, GitLab
                        </p>
                        <p style={styles.text}>
                            <b>Other:</b> REST APIs, GraphQL, Agile methodologies, Microservices, TDD,
                            OAuth, JWT
                        </p>
                    </div>
                </div>
                <div style={styles.divider}></div>
            </div>
        </div>
    );
}

export default Experience;
