import React from 'react'
import TeamShirtForm from '../components/TeamShirtForm'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'



const TeamPage = () => (
    <section i className="wrapper style1 ">

        <SideBar />


        <h2 className="container">Free Ballin Team Shirt Form</h2>
        <div className="container">
            <TeamShirtForm />
        </div>
        <Footer />
    </section >

)
export default TeamPage