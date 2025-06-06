import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rider Manrique</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/ridermanriquec/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://github.com/ridermanriquecueto/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.linkedin.com/in/rider-manrique/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>
                </div>

                <span className='footer__copy'>
                    &#169; Rider Manrique, 2025
                </span>
            </div>
        </footer>
    )
}

export default Footer