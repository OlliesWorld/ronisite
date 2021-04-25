import React from 'react';


import "animate.css/animate.min.css"
import Fade from 'react-reveal/Fade'

import Taft from '../assets/images/tafthill.png'
import Unplug from '../assets/images/unplugged1.jpg'
import Slicks from '../assets/images/slickspizza.png'
import Form from '../assets/images/active-states.jpg'
import OllieSite from '../assets/images/olliesworld-site.png'
import Return from '../assets/images/returnship-shot.png'




class ProjectPage extends React.Component {

  render() {
    return (
      <section className="wrapper style5">
        <div className="inner">
          <Fade left >
            <h4 className="style8">Women Who Code Returnship</h4>
            <p><span className="image left">
              <a href="https://career-returnship.netlify.app/" alt="Screen Shot of Returnship Website" target="blank"> <img src={Return} alt="Placeholder for a project in progress" /></a>
            </span> This site was built for the Women Who Code Returnship Program. I worked with a team using a Figma design file to create this website. It was my first experience working with a team and really understanding how to use GitHub. I learned about Styled Components and how to hook up a CMS. This project was a great way to push my journey as a developer forward.</p>
            <h4>~ GatsbyJS and NetlifyCMS site ~</h4>
          </Fade>
          <hr />
          <Fade right >
            <h4 className="style8">Taft Hill Acres</h4>
            <p><span className="image right">
              <a href="https://www.tafthillacres.com/" target="blank"><img src={Taft} alt="Screen shot of Freelance Website" /></a>
            </span>This 6 page site is a complete redesign for the client. There are 2 image sliders, and a grid gallery with over 50 images. One slider includes customer testimonials along with images. A dark theme which we balanced with warm lighter color text boxes. I was able to take the Farm's logo and recreate it into a image file that will be useable in other situations. The contact form emails responses directly to client. The site is built on GatsbyJS Framework for reliability, speed and security. With Lighthouse scores of 99 to 100.</p>
            <h4 >~ GatsbyJS site full of images, a Contact Form and custom color theme ~</h4>
          </Fade>

          <hr />

          <Fade left>
            <h4 className="style8">Unplugged</h4>
            <p><span className="image left">
              <a href="https://olliesworld.rocks/projects/unplugged/index.html" target="blank" ><img src={Unplug} alt="screenshot of Unplugged Template" /></a>
            </span>This template was created to demonstrate that a dark theme can still be enjoyable and pass along the information needed. The 3 pages in this template is a great place to start a great website that can hold any information you may need for your customers. Icons are used as a fun and creative way to highlight important information about your business. About page that includes a map for customers to locate you as well as a contact form. A simple sign up form to help grow your contact list is included on this template.</p>
            <h4>~ Basic 3 page Site with images and contact form ~</h4>
          </Fade>
          <hr />
          <Fade right >
            <h4 className="style8">Slick's Slices</h4>
            <p><span className="image right">
              <a href="https://template-slicks-slices.netlify.app/" target="blank"><img src={Slicks} alt="Slicks Pizza screenshot" /></a>
            </span>A JAMstack template ecommerce site. This template is brimming with features that can help you sell your products. Front page includes the slow loading feature that is a cool and effective way to help your site load quickly. There is an order page that just needs to be hooked to your favorite payment system. The pizza's page includes a search filter so customers can find their favorite ingredients. Ecommerce sites are becomming vital to any business. This site loads quickly and can be hooked to a CMS for easy updates to inventory and other information. </p>
            <h4>~ GatsbyJS and CMS site using GraphQL ~</h4>
          </Fade>

          <hr />
          <Fade left>
            <h4 className="style8">Sign Up Form</h4>
            <p><span className="image left">
              <a href="https://olliesworld.rocks/projects/sign_up_form/index.html" target="blank"><img src={Form} alt="signup form screenshot" /></a>
            </span>This is a basic sign-up form that can be added to a page or as a landing page. It is an HTML5 and vanilla JavaScript page. The input fields are setup with checks to make sure the form is filled out correctly. This form is very adaptable to what you may need. Do you need to reach more customers with your awesome newsletter? Or do you have an event coming up that you need to register the attendees. Use this form to gather more information about your clients.
          </p>
            <h4>~ Sign up form that is easily customized to your brand and implemented ~</h4>
          </Fade>
          <hr />

          <Fade left>
            <h4 className="style8">First Site</h4>
            <p><span className="image left">
              <a href="https://olliesworld.rocks/" target="blank"><img src={OllieSite} alt="My first portfolio site" /></a>
            </span>This is my first where I started my journey. The original goal was a blog, so maybe I will get that deployed next. Currently it is a basic HTML and CSS site, but I will be updating to a framework, I really like working with React and want to sharpen my skillset.</p>
            <h4>~ HTML, CSS site ~</h4>
          </Fade>

        </div>

      </section >

    )
  }
}
export default ProjectPage;
