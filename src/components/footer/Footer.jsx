import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <div className='footer__title'>
        </div>

        <ul className='footer__list'>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">Qualification</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Portfolio</a>
          </li>
        </ul>

        <div className='footer__contact'>
          <i className='bx bx-mail-send footer__contact-icon'></i>
          <span className="footer__contact-data">susshhh23@gmail.com</span>
          <a href="mailto:susshhh23@gmail.com" className="footer__contact-button">
            Write Me{' '}
            <i className="bx bx-right-arrow-alt footer__button-icon"></i>
          </a>
        </div>

        <div className='footer__social'>
          <a
            href='https://www.instagram.com/__susshhh__/'
            className='footer__social-link'
            target='_blank'
            rel="noreferrer"
          >
            <i className='bx bxl-instagram'></i>
          </a>

          <a
            href='https://www.facebook.com/sushhi.01'
            className='footer__social-link'
            target='_blank'
            rel="noreferrer"
          >
            <i className='bx bxl-facebook'></i>
          </a>

          <a
            href='https://twitter.com/_sushhi_'
            className='footer__social-link'
            target='_blank'
            rel="noreferrer"
          >
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <span className='footer__copy'>&#169; Sushi. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
