import React from 'react';


import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';

import Taft from '../assets/images/tafthill.png';
import Unplug from '../assets/images/unplugged1.jpg';
import Slicks from '../assets/images/slickspizza.png';
import Form from '../assets/images/active-states.jpg';
import OllieSite from '../assets/images/olliesworld-site.png';
import Jane from '../assets/images/jane.png';


  

  class ProjectPage extends React.Component {
    
  render(){
    return(
      
      <section className="wrapper style5">
      
        <div className="inner">
          
            
   
        <Fade right >
              <h4>Taft Hill Acres</h4>
              <p><span className="image right">
                <a href="https://www.tafthillacres.com/" alt="Website" target="blank"><img src={Taft} alt="" /></a>
                </span>This 6 page site is a completely redesign for the client. There are 2 types of image galleries, slider, and a grid display. The slider includes client testimonials along with images. The client wanted a dark theme which we balanced with warm lighter color text boxes. I was able to take the Farm's logo and recreate it into a image file that will be useable in other situations. There is a contact form that emails responses to client. The site is built on GatsbyJS Framework for reliability, speed and security. I will be adding NetlifyCMS to this site in the future. This will allow the client to change photos and copy by logging into a simple UI. The NetlifyCMS UI will allow client to edit pages without having to touch the code.  </p>
              <h5>GatsbyJS with Image Sliders, Image Grid, Contact Form and custom color scheme</h5>
            </Fade>  

          <hr />
         
          <Fade left>
            <h4>Unplugged</h4>
                <p><span className="image left">
                  <a href="https://olliesworld.rocks/projects/unplugged/index.html" target="blank" alt="template website"><img src={Unplug} alt="screenshot of Unplugged" /></a>
                  </span>Unplugged Template is another dark theme that can be adjusted to fit your needs. This is currently an HTML5 site but can be ammended to other languages if needed. This 3 page site has a color block theme with icons and a simple newsletter sign-up form. There are areas for different sized images and great ways to displayed. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. Curabitur purus leo, tempus sed finibus eget, fringilla quis risus. </p>
                <h4>Full 3 page Site with images and contact form</h4>
            </Fade>
					<hr />
          <Fade right >
            <h4>Slick's Slices</h4>
            <p><span className="image right">
              <a href="https://template-slicks-slices.netlify.app/" target="blank"><img src={Slicks} alt="Slicks screenshot"  /></a>
              </span>Another GatsbyJS site, this one is an ecommerce template site. One of the great features of Gatsby is the image loading feature. Front page includes the slow loading feature. There is an order page that jsut needs to be hooked to your favorite payment system. The pizza's page includes a search filter so customers can find their favorite ingredients. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Donec id neque ipsum. </p>
            <h5>GatsbyJS with Image Loading, Order Page, Search filter, and Contact Form</h5>
          </Fade>
        
          <hr />
          <Fade left>
            <h4>Sign Up Form</h4>
            <p><span className="image left">
              <a href="https://olliesworld.rocks/projects/sign_up_form/index.html" target="blank"><img src={Form} alt="signup form screenshot" /></a>
              </span>This is a basic sign-up form that can be added to a page or as a landing pagecompletely new site for client. It is an HTML5 site with vanilla JavaScript. The input fields are setup with check to make sure the form is filled out correctly. This form is easily customizable with your color scheme and branding. Do you need to reach more customers with your awesome newsletter? Or do you have an event coming up that you need to register the attendees. How about having a sale that you want to make exclusive. Use this form to gather more information about your clients. This form is very adaptable to what you may need.
          </p>
            <h5>Simple form that is easily customizable to your brand.</h5>
          </Fade>
          <hr />
          <Fade right >
            <h4>Template Site</h4>
            <p><span className="image right">
              <img src={Jane} alt="Slicks screenshot" />
              </span>I AM NOT SURE I SHOULD INCLUDE THIS ONE OR ANOTHER.This is a completely new site for client. There are 2 types of image galleries, testimonial slider, and a contact form. This is built on GatsbyJS Framework for reliability, speed and security. Maecenas et lorem quis sem varius sagittis et a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor.</p>
            <h5>GatsbyJS with Image Sliders, Image Grid, Contact Form and custom color scheme</h5>
          </Fade>
          <hr />
          <Fade left>
            <h4>Original Site</h4>
            <p><span className="image left">
              <a href="https://olliesworld.rocks/" target="blank"><img src={OllieSite} alt="" /></a>
              </span>This is my expierment site where I started my journey and keep adding and trying new things. Along with ALL the photos of the most adorable dog, Ollie. It was my first portfolio site and will continue to evolve with my skills and knowledge.</p>
            <h5>This site is where I expierment with what I learned and talk about my favorite Guy!</h5>
          </Fade>
          
				</div>
      
        </section>
      
)
  }}
export default ProjectPage;
