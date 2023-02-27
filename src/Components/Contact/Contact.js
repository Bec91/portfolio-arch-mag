import './Contact.scss'
import React from "react"

function Contact() {
    const [formStatus, setFormStatus] = React.useState('SEND');

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitted')

        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom);
    }

    return(
        <div className='form'>
            <h3 className='form__formTitle'>Contact Us to be featured</h3>
            <form
                onSubmit={onSubmit}
                method="POST"
                target='_blank'
            >
                <div className='form__inputContainer'>
                    <label className='form__label' htmlFor='name'>Name</label>
                    <input
                        className='form__formField'
                        type="text"
                        id='name'
                        required
                    />
                </div>
                <div className='form__inputContainer'>
                <label className='form__label' htmlFor='email'>Email</label>
                    <input
                        className='form__formField'
                        type="email"
                        id='email'
                        required
                    />
                </div>
                <div className='form__inputContainer'>
                <label className='form__label' htmlFor='message'>Message</label>
                    <textarea
                        className='form__formField'
                        id='message'
                        required
                    />
                </div>
                <div className='form__buttonContainer'>
                    <button
                        type='submit'
                        className='form__button'
                    >
                        {formStatus}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;