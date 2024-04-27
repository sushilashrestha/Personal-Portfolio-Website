
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer_title">Sushi
            </h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

            </ul>

            <div className="footer__social">
            <a 
            href="https://www.instagram.com/" 
            className="footer__social-link" 
            target="_blank">

            <i className="bx bxl-instagram"></i>
        </a>

        <a 
            href="https://facebook.com/" 
            className="footer__social-link"
            target="_blank">

            <i className="bx bxl-facebook"></i>
        </a>

        <a 
            href="https://twitter.com/" 
            className="footer__social-link"
            target="_blank">
                
            <i className="bx bxl-twitter"></i>
        </a>
            </div>

            <span className="footer__copy">&#169; Sushi. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer