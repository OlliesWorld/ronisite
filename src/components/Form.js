import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'


const ContactForm = () => {

    // Post-Submit Navigate
    const postSubmit = () => {
        navigate('/thanks')
    }

    // Simple controlled form setup (Control your own state)
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    })

    return (
        <NetlifyForm className="Form" formName="contact" formValues={formValues} postSubmit={postSubmit} >
            <label htmlFor="nameInput" className="Form--Title">Send us a Message</label>
            <div className='Form--Label'>
                <input placeholder='Name' className='Form--Input' type="text" name="name" value={formValues.name} onChange={handleChange} required />
            </div>
            <div className='Form--Label'>
                <input className='Form--Input' type='email'
                    placeholder='Email'
                    name='email' value={formValues.email} onChange={handleChange} required />
            </div>
            <div className='Form--Label'>
                <textarea className='Form--Input Form--Textarea'
                    placeholder='Message'
                    name='message'
                    rows='8' value={formValues.message} onChange={handleChange} required />
            </div>
            <div>
                <button className='Button Form--SubmitButton'
                    type='submit'
                    value='Contact' >Send</button>
            </div>
        </NetlifyForm>
    )
}
export default ContactForm