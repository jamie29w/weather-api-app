import React from 'react'

const FooterComponent = () => {
    const styles = {
        footerStyles: {
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            color: "#465353"
        }
    }

    return (
        <h4 style={styles.footerStyles}>Powered by the <a
            href="https://developers.google.com/places/web-service/intro"
                rel="noopener noreferrer"
                target="_blank"
                > Google Places</a> & <a
                    href="https://darksky.net/dev"
                    rel="noopener noreferrer"
                    target="_blank"
                >Dark Sky</a> APIs.
        </h4>
    )
}

export default FooterComponent