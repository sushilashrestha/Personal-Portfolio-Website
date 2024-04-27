import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a 
            href="https://www.instagram.com/" 
            className="home__social-icon" 
            target="_blank">

            <i class="uil uil-instagram"></i>
        </a>

        <a 
            href="https://github.com/" 
            className="home__social-icon" 
            target="_blank">

            <i class="uil uil-github"></i>
        </a>

        <a 
            href="https://linkedlin.com/" 
            className="home__social-icon" 
            target="_blank">
                
            <i class="uil uil-linkedin"></i>
        </a>

    </div>

  )
}

export default Social