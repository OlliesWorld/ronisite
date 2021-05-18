import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Snow from '../assets/images/olliesnow.png'


const ContactPage = () => (
  <section id="one" className="wrapper style1 ">

    <SideBar />
    <div className="form_style">

      <img src={Snow} alt="Ollie and I in the snow" />

      <Form />
    </div>
    <Footer />
  </section >



)
export default ContactPage