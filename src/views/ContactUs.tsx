import { useState } from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate3.jpg'
import emailjs from 'emailjs-com'

import { FaMapPin } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Home = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [handleSummit, setHandleSummit] = useState(false)
    const [error, setError] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('')
    
    const inputHandler = (input: any) => {
        const inputName = input.target.name
        const inputValue = input.target.value

        if (inputName === 'user_name') {
            setName(inputValue)
        }

        if (inputName === 'user_email') {
            setEmail(inputValue)
        }

        if (inputName === 'message') {
            setMessage(inputValue)
        }
    }
    
    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgb(191, 191, 191) 20%, rgba(16, 29, 44, 0.8)), url(${RealEstate1})`,
    }

    const templateParams = {
      user_name: name,
      user_email:email,
      message
    };
    
    const handleForm = (e: any) => {
        e.preventDefault()
        
        setHandleSummit(true)
        
        if (email === '' || message === '' || name === '') {
            setError(true)
            console.log('not sent')
            setDisplayMessage('Fields cannot be empty')
        } else {
            setError(false)
            setDisplayMessage('...Sending')

            emailjs
            .send('service_ug3kztv', 'template_1fpejxx', templateParams, 'user_TyUAlfFTW7kMzOobPhtRV')
            .then(
                (result) => {
                        setDisplayMessage('Message sent')
                        console.log(result.text, 'email sent')
                        setEmail('')
                        setName('')
                        setMessage('')
                    },
                    (error) => {
                        console.log(error, 'email failed')
                    }
                )

        }
    }

    return (
        <>
            <header className='heropages' style={bgImg}>
                <div className='heropages__1'>
                    <h3 className='heading-3'>Contact Us:</h3>
                    <h1 className='heading-1'>Always Available For You</h1>
                </div>
            </header>
            <div className='contact-box'>
                <h2 className='heading-1 heading-2--dark contact-box__heading'>
                    contact form
                </h2>
                {handleSummit && (
                    <p
                        className={
                            error
                                ? 'form__displayError'
                                : 'form__displayMessage'
                        }
                    >
                        {displayMessage}
                    </p>
                )}
                <form className='contact-form' onSubmit={handleForm}>
                    <div className='contact-form__item'>
                        <label htmlFor='name'>Your name:</label>
                        <input
                            className='contact-form__input'
                            onChange={inputHandler}
                            type='text'
                            name='user_name'
                            value={name}
                        />
                    </div>

                    <div className='contact-form__item'>
                        <label htmlFor='mail'>Your e-mail:</label>
                        <input
                            className='contact-form__input'
                            onChange={inputHandler}
                            type='text'
                            name='user_email'
                            value={email}
                        />
                    </div>

                    <div className='contact-form__item'>
                        <label htmlFor=''>Message:</label>
                        <textarea
                            className='contact-form__input'
                            name='message'
                            onChange={inputHandler}
                            value={message}
                            rows={5}
                        ></textarea>
                    </div>
                    <button type='submit' className='contact-form__btn'>
                        send
                    </button>
                </form>

                <div className='contact-box__details'>
                    <FaMapPin />
                    <p>Rufai Garuba Street, Real Estate, Awka Anambra state</p>

                    <AiFillPhone />
                    <p>08161865277, 08068789462</p>

                    <MdEmail />
                    <p>onyenweeproperties@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Home
