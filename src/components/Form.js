import { navigate } from "gatsby"
import React, { useState } from "react";


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const NameForm = (props) => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        // Prevent the default onSubmit behavior
        event.preventDefault();
        // POST the encoded form with the content-type header that's required for a text submission
        // Note that the header will be different for POSTing a file
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": event.target.getAttribute("contact"),
                ...name
            })
        })
            // On success, redirect to the custom success page using Gatsby's `navigate` helper function
            .then(() => navigate("/thanks/"))
            // On error, show the error in an alert
            .catch(error => alert(error));
    };

    return (

        <form
            name="contact"
            method="post"
            data-netlify-recaptcha="true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="Form"
            action="/"
            onSubmit={handleSubmit}
        >
            <label htmlFor="nameInput" className="Form--Title">Send Me a Message!</label>
            <label className='Form--Label'>
                <input
                    className='Form--Input'
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={handleChange}
                    required
                />
            </label>
            <label className='Form--Label'>
                <input
                    className='Form--Input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                />
            </label>

            <label className='Form--Label'>
                <textarea
                    className='Form--Input Form--Textarea'
                    placeholder='Message'
                    name='message'
                    rows='8'
                    required
                />
            </label>
            <input type='text' name='_gotcha' style={{ display: 'none' }} />

            <input type='hidden' name='form-name' value={name} />
            <input
                className='Form--SubmitButton'
                type='submit'
                value='Send'
            />
        </form>
    );
}

export default NameForm