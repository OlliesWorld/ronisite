import React from 'react';

import Layout from '../components/Layout';
import {Animated} from "react-animated-css";
import Scroll from '../components/Scroll';

// import single from '../assets/images/single-price.jpg';
// import taft from '../assets/images/tafthill.png';
// import unplugged from '../assets/images/unplugged1.jpg';
import Ollie from '../assets/images/ollie_toon.png';
import Html from '../assets/images/html.png';
import Css from '../assets/images/css.png';
import Javascript from '../assets/images/javascript.png'
import ReactI from '../assets/images/react.svg'
import Gatsby from '../assets/images/Gatsby_Monogram.png'
import Github from '../assets/images/codercat.jpg'
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/project" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            I am passionate about all things web devlopment,
            <br />
           food trucks, music and my best bud Ollie.
          </h2>
          <p>
            My unique background has given me a perspective that helps to look outside the box for creating solutions.
            <br />
            With my attention to detail and stubborness to find a solution makes me a great developer.
          </p>
        </header>
        <ul className="icons major">
          <li>
          <Animated animationIn="jello" animationOut="jello" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
            <span className="icon major">
              <img src={Html} alt="HTML Icon" className="IconL"/>
        
            </span>
            </Animated>
          </li>
          <li>
          <Animated animationIn="jello" animationOut="jello" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
            <span className="icon major">
            <img src={Css} alt="Css Icon" className="IconL"/>
             
            </span>
            </Animated>
          </li>
          <li>
          <Animated animationIn="jello" animationOut="jello" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
            <span className="icon major">
            <img src={Javascript} alt="JavaScript Icon" className="IconL"/>
            </span>
            </Animated>
          </li>
          
          <li>
            <span className="icon major">
            <img src={ReactI} alt="React Icon" className="IconL "/>
            </span>
            
          </li>
         
          <li>
            <span className="icon major">
            <img src={Gatsby} alt="GatsbyJS Icon" className="IconL"/>
            </span>
            
          </li>
          <li>
          <span className="icon major">
      
            <img src={Github} alt="GitHub Icon" className="IconL "/>
            
            </span>
          </li>
        </ul>
      </div>
    </section>
    
    
{/* <div>
  <Project />
</div> */}
    {/* <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={single} alt="" />
        </div>
        <div className="content">
          <h2 className="site-type">
            Landing Page
             </h2>
          <h2 className="site-tech">
            HTML5, CSS, JS
          </h2>
          <p>
            This project was a design file to landing page. A simple landing page for a special item or event that you would like to highlight. The button can direct them to a order form or just to a page on your site.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="/#"><img src={taft} alt="Taft Hill Acres Screenshot" /></a>
        </div>
        <div className="content">
          <h2 className="site-type">
           Full 5 Page Website
             </h2>
          <h2 className="site-tech">
            GatsbyJS, Netlify & NetlifyCMS
          </h2>
          <p>
            A completely new website from layout, design and photos. This site is a GatsbyJS build with 2 types of image sliders. A contact form with security and Logo file update. Also a plan to convert to a Headless CMS site soon.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={unplugged} alt="" />
        </div>
        <div className="content">
          <h2 className="site-type">
            Website from Design
             </h2>
          <h2 className="site-tech">
            HTML5 & CSS
          </h2>
          <p>
            This project of taking a design comp with the layout and create a mobile-first responsive website. This design full of unique and custom features.
          </p>
         
        </div>
      </section>
    </section> */}

    <section aria-label="some interesting things about me" id="three" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>What does a Developer do in real life?</h2>
          <p>
          A developer is a problem solver in real life. They must not give up until the answer is found and the problem is fixed! Sometimes that means just a work around for temporary relief. The goal is to find or develop a complete fix. 
          This what I love about being a developer. Think about the problem all the time and coming up with a way into an outside the box solution. Give me a Saturday afternoon, an intersting problem, and a local craft sour beer and I will gladly go down the google search rabbit hole! 
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-globe-americas  style2">
            <h3>Connection</h3>
            <p>
              One of the main tools for connecting me, my work and customers is Git. Git is a free, open source version control system. This system makes the world of websites a lot easier to deploy with multiple options like Netlify.
            </p>
          </li>
          <li className="icon  solid fa-laptop  style2">
            <h3>Websites</h3>
            <p>
              I want to create and maintain websites that are responsive, intuitive, and creative. Working with the latest technologies to produce sites that provide a incredible service. This is my goal for a fulfilling career.
            </p>
          </li>
          <li className="icon solid fa-code style2">
            <h3>Code</h3>
            <p>
              My favorite obsession! I love learning how to make things work and look good together. How all these characters and letters can create an application that will be used by someone in another world.
            </p>
            
          </li>
          <li className="icon solid fa-headphones-alt style2">
            <h3>Music</h3>
            <p>
              Music is a very important part of my life. I go to sleep, wake up to music and anywhere in between. My taste is always expanding, with the help of music platforms to explore. Americana is great to have flowing when coding.
            </p>
          </li>
          <li className="icon fa-heart style2">
            <h3>Ollie</h3>
            <p>
              If you know me than you know that my world pretty much revolves around Ollie. He is such a great pup and very understanding of my bad singing, messy housekeeping, schedule. All he asks is for lots of walks, social time, good food and all the belly rubs! Check out his site here: <br />
              <a href="https://olliesworld.rocks/"  alt="ollies world"><img src={Ollie} className="dogemoji" alt="Ollie in toon form" /></a>
            </p>
          </li>
          <li className="icon solid fa-low-vision style2">
            <h3>Accessibility</h3>
            <p>
              Another goal is to learn how to make everything I do accessible. It is very important that everybody has the same access to whatever they may need or want. Now that technology is a part most every piece our daily lives, it should also include how I create.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Roni Lockwood</h2>
          <p>
            Let me build you a website that represents you and your business. With solution that will be responsive, creative and enjoyable.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/Contact" className="button fit primary">
              Contact Me
            </a>
          </li>
          {/* <li>
            <a href="/#" className="button fit">
              Contact Me
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
