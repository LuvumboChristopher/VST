import React from 'react';

const Footer = () => {
    const styles = {
        container: {
            padding: '20px 0',
            textAlign: 'center',
            backgroundColor: 'white',
        },
        text: {
            fontSize: '0.75rem',
            color: 'black',
        },
        link: {
            fontWeight: 'bolder',
            marginLeft: '0.25rem',
            color: 'black',
        },
    };

    return (
        <div style={styles.container}>
            <h4 style={styles.text}>
                Réalisation et conception par 🚀
                <a
                    href="https://www.linkedin.com/in/christopher-luvumbo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    L.Christopher
                </a>
            </h4>
        </div>
    );
};

export default Footer;
