import { useState } from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate4.jpg'

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

        if (inputName === 'name') {
            setName(inputValue)
        }

        if (inputName === 'email') {
            setEmail(inputValue)
        }

        if (inputName === 'message') {
            setMessage(inputValue)
        }
    }

    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }

    const handleForm = (e: any) => {
        e.preventDefault()

        setHandleSummit(true)

        if (email === '' || message === '' || name === '') {
            setError(true)
            console.log('not sent')
            setDisplayMessage('Fields cannot be empty')
        }

        setDisplayMessage('Message sent')
        setError(false)

        console.log('email sent')

    }

    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Contact Us:</h3>
                    <h1 className='heading-1'>Always Available For You</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
            </header>{' '}
            <div className='contact-box'>
                <h2 className='heading-1 heading-2--dark contact-box__heading'>
                    contact form
                </h2>

                {handleSummit && <p>{displayMessage}</p>}
                <form className='contact-form' onSubmit={handleForm}>
                    <div className='contact-form__item'>
                        <label htmlFor='name'>Your name:</label>
                        <input
                            className='contact-form__input'
                            onChange={inputHandler}
                            type='text'
                            name='name'
                            value={name}
                        />
                    </div>

                    <div className='contact-form__item'>
                        <label htmlFor='mail'>Your e-mail:</label>
                        <input
                            className='contact-form__input'
                            onChange={inputHandler}
                            type='text'
                            name='email'
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
            </div>
        </>
    )
}

export default Home
