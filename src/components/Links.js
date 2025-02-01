import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const styles = {
    links: {
        height: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#555',
        color: 'white',
        fontSize: '25px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        transition: 'transform 0.3s ease-out',
        display: 'inline-block',
    },
    linkHover: {
        transform: 'scale(1.2)',
    }
};

function Links() {
    return (
        <footer style={styles.links}>
            <a href="https://github.com/kashyapchilivoju" style={styles.link}
               onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/kashyap-chilivoju-20414b48" style={styles.link}
               onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://drive.google.com/uc?export=download&id=1xkWuwCs1nsBR0KMk9wI65ouQpQ545kwA" style={styles.link}
               onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FontAwesomeIcon icon={faFileDownload} /></a>
            <a href="https://stackoverflow.com/users/25541752/kashyap-chilivoju" style={styles.link}
               onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FontAwesomeIcon icon={faStackOverflow} /></a>
            <a href="mailto:kashyap.chilivoju@gmail.com" style={styles.link}
               onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
               onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}><FontAwesomeIcon icon={faEnvelope} /></a>
        </footer>
    );
}

export default Links;
