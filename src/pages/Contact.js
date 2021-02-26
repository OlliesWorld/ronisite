import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Snow from '../assets/images/olliesnow.png'


const ContactPage = () => (
  <section id="one" className="wrapper style1 special">

    <SideBar />
    <p><span className="form">
      <img src={Snow} alt="Ollie and I in the snow" />
    </span></p>
    <Form />
    <Footer />
  </section >



)
export default ContactPage