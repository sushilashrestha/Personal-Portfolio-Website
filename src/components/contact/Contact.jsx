import emailjs from '@emailjs/browser'
import './contact.css'
import { useRef, useState } from 'react'

const Contact = () => {
  const form = useRef()
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    setIsLoading(true)

    const templateParams = {
      to_name: 'Sushila',
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log('SUCCESS!', result.text)
          setIsSent(true)
        },
        error => {
          console.log('FAILED...', error.text)
          alert('Failed to send message, please try again.')
        }
      )
      .finally(() => {
        setIsLoading(false)
        e.target.reset()
      })
  }

  const handleSendAnother = () => {
    setIsSent(false)
  }

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Projects?</h3>

          {isSent ? (
            <div className='contact__message-sent'>
              <div className='contact__sent-icon'>
                <i className='uil uil-check-circle'></i>
                <h3>Message Sent!</h3>
              </div>

              <button
                className='button button--flex'
                onClick={handleSendAnother}
              >
                Send Another Message
                {/* SVG remains unchanged */}
              </button>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className='contact__form'>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Name</label>
                <input
                  type='text'
                  name='from_name'
                  className='contact__form-input'
                  placeholder='Insert Your Name'
                  required
                  disabled={isLoading}
                />
              </div>

              <div className='contact__form-div'>
                <label className='contact__form-tag'>Email</label>
                <input
                  type='email'
                  name='from_email'
                  className='contact__form-input'
                  placeholder='Insert Your Email'
                  required
                  disabled={isLoading}
                />
              </div>

              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Message</label>
                <textarea
                  name='message'
                  cols='30'
                  rows='10'
                  className='contact__form-input'
                  placeholder='Write your project'
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <button className='button button--flex' disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
                {!isLoading && (
                  <svg
                    className='button__icon'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    {/* SVG path remains unchanged */}
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
