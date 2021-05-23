import React from 'react'

const Footer = () => {

        return (
                <footer className="page-footer" style={footerBgColor}>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2021 Knack Org.
                        </div>
                    </div>
                </footer>
            )
}

const footerBgColor = {
    backgroundColor: '#003699'
}

export default Footer
