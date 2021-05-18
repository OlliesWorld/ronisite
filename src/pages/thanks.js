import React from 'react'
import Sidebar from '../components/Sidebar'
import Green from '../assets/images/greenOllie.jpeg';


const ThanksPage = () => (

  <>
    <Sidebar />

    <article className="thanks_wrapper">
      <h2>Ollie and I will get in touch soon!</h2>
      <img src={Green} alt="Ollie and I in front of computer" className="thanks-img" />
      {/* <h3>Thank you for sending a message.</h3> */}

    </article>
  </>
)

export default ThanksPage
