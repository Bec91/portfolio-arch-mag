import './Contact.scss'
import React from "react"

function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send');

    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')

        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom);
    }

    return(
        <form
            onSubmit={onSubmit}
            method="POST"
            target='_blank'
        >
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    id='name'
                    required
                />
            </div>
            <div>
            <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    id='email'
                    required
                />
            </div>
            <div>
            <label htmlFor='message'>Message</label>
                <textarea 
                    id='message'
                    required
                />
            </div>
            <button type='submit'>{formStatus}</button>
        </form>
    )
}

export default Contact;