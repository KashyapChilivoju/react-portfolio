import React from 'react';

const styles = {
    footer: {
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        color: 'white',
        fontSize: '14px',
        padding: '0 20px',
    },
    text: {
        margin: 0,
    },
};

function Footer() {
    const date = new Date();
    const lastUpdated = date.toLocaleDateString();

    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2024 Kashyap Chilivoju. All rights reserved.</p>
            <p style={styles.text}>Made with HTML, CSS, JavaScript.</p>
            <p style={styles.text}>Last updated: {lastUpdated}</p>
        </footer>
    );
}

export default Footer;
