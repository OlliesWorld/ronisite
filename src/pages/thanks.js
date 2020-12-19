import React from 'react'
import { Link } from 'gatsby';
import Green from '../assets/images/greenOllie.jpeg';



import Footer from '../components/Footer';
import SideBar from '../components/Sidebar';


const ThanksPage = () => (
   <section id="one" className="wrapper style1 special">
  <header id="header" >
      <h1>
        <Link to="/">RoniDev Site</Link>
      </h1>

 <SideBar />
</header>
        
        <h2>Ollie and will get back to you soon!</h2>
        <hr />
        <img src={Green} alt="Ollie and I in front of computer" className="thanks-img" />
        <h3>Thank you for sending a message.</h3>
<Footer />
</section>
   

   
)
export default ThanksPage