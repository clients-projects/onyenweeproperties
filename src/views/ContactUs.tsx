import {useState} from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate4.jpg'

const Home = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

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


    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Interior:</h3>
                    <h1 className='heading-1'>Your Comfort, Our Concern</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
            </header>{' '}
            <div className='contInfo'>
                {' '}
                <div className='container'>
                    <div className='row'>
                        <div className='left'>
                            <ul>
                                <li>
                                    <div className='table full'>
                                        <div className='img tCell middle'>
                                            <span className='icon-location'></span>
                                        </div>
                                        <div className='data tCell middle'>
                                            <span className='title'>
                                                our Address:
                                            </span>
                                            <p>
                                                71-75 Shelton Street, London,
                                                Greater London, United Kingdom,
                                                WC2H 9JQ
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='table full'>
                                        <div className='img tCell middle'>
                                            <span className='icon-mail'></span>
                                        </div>
                                        <div className='data tCell middle'>
                                            <span className='title'>
                                                e-mail:
                                            </span>
                                            <a
                                                href='mailto:admin@robot44trade.com'
                                                target='_blank'
                                                className='link'
                                                rel='noopener noreferrer'
                                            >
                                                onyenweeproperties@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='right'>
                            <div className='map' id='map'>
                                <iframe
                                    title='iframe2'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.664190550833!2d-0.0020082838559824082!3d51.57438937964627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a761dc8a2877%3A0x445ae65e3d837263!2s23+Sandringham+Rd%2C+London!5e0!3m2!1suk!2suk!4v1533728208403'
                                    width='100%'
                                    height='100%'
                                    frameBorder='0'
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blockForm'>
                <div className='containerSM'>
                    <span className='captionDark center'>contact form</span>
                    <div className='wrap'>
                        <form>
                            <div className='row bigPadd'>
                                <div className='item col6'>
                                    <div className='formBlockLight'>
                                        <label htmlFor='name'>Your name:</label>
                                        <input
                                            onChange={inputHandler}
                                            type='text'
                                            name='name'
                                            value={name}
                                        />
                                    </div>
                                </div>
                                <div className='item col6'>
                                    <div className='formBlockLight'>
                                        <label htmlFor='mail'>
                                            Your e-mail:
                                        </label>
                                        <input
                                            onChange={inputHandler}
                                            type='text'
                                            name='email'
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='formBlockLight'>
                                    <label htmlFor=''>Message:</label>
                                    <textarea
                                        name='message'
                                        onChange={inputHandler}
                                        value={message}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btnFillDarkMd center'
                            >
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
