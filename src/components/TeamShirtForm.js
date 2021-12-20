import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'
import e from "express"



const TeamShirtForm = () => {

    // Post-Submit Navigate
    const postSubmit = () => {
        navigate('/thanks')
    }

    // Simple controlled form setup (Control your own state)
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value, [e.target.size]: e.target.value })
    const [formValues, setFormValues] = useState({
        name: '',
        size: e.target.size,
        message: ''
    })

    return (

        <NetlifyForm className="Form" formName="teamshirt" formValues={formValues} postSubmit={postSubmit} >
            <label htmlFor="nameInput" className="Form--Title">Please fill out form.</label>
            <div className='Form--Label'>
                <input placeholder='Name' className='Form--Input' type="text" name="name" value={formValues.name} onChange={handleChange} required />
            </div>
            <div className='Form--Label'>
                Shirt Size
                 </div>
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        value={formValues.size}
                        onChange={handleChange}
                        className="radio-checkmark"
                    />
                        Small
                </label>
                <label>
                    <input
                        type="radio"
                        value={formValues.size}
                        onChange={handleChange}
                        className="radio-checkmark"
                    />
                        Medium
                </label>
                <label>
                    <input
                        type="radio"
                        value={formValues.size}
                        onChange={handleChange}

                        className="radio-checkmark"
                    />
                        Large
                </label>
                <label>
                    <input
                        type="radio"
                        value={formValues.size}
                        onChange={handleChange}

                        className="radio-checkmark"
                    />
                        X-Large
                </label>
            </div>
            <div className='Form--Label'>
                <textarea className='Form--Input Form--Textarea'
                    placeholder='Let me know if you need a different size or more than 1 shirt'
                    name='message'
                    rows='8' value={formValues.message} onChange={handleChange} required />
            </div>
            <div>
                <button className='Button Form--SubmitButton gradient2'
                    type='submit'
                    value='Contact' >Send</button>
            </div>
        </NetlifyForm >

    )
}
export default TeamShirtForm