import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import single from '../assets/images/single-price.jpg';
import taft from '../assets/images/tafthill.png';
import unplugged from '../assets/images/unplugged1.jpg';
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
              <a href="/#" className="button primary">
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
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-eye major style1">
              <span className="label">I do</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Heart </span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Code</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={single} alt="" />
        </div>
        <div className="content">
          <h2 className="site-type">
            Landing Page
             </h2>
          <h2 className="site-tech">
            Html5, CSS, JS
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
            New Website
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
            Html5 & CSS
          </h2>
          <p>
            This project of taking a design comp with the layout and create a mobile-first responsive website. This design full of unique and custom features.
          </p>
         
        </div>
      </section>
    </section>

    <section aria-label="some interesting things about me" id="three" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>What does a Developer do in real life?</h2>
          <p>
          Good, there's somebody I'd like you to meet. Lorraine. Yeah. George McFly? Oh, he's kinda cute and all, but, well, I think a man should be strong, so he could stand up for himself, and protect the woman he loves. Don't you? Ahh. Hey George, buddy, hey, I've been looking all over for you. You remember me, the guy who saved your life the other day.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-globe-americas  style3">
            <h3>Connection</h3>
            <p>
              One of the main tools for connecting me, my work and customers is Git. Git is a free, open source version control system. This system makes the world of websites a lot easier to deploy with multiple options like Netlify.
            </p>
          </li>
          <li className="icon  solid fa-laptop  style3">
            <h3>Websites</h3>
            <p>
              My goal is to create, update, maintain websites that are responsive, intuitive, and creative. I have worked with entreprenuers and small business all of my life. I know how hard it is to keep all the balls in the air and growing. I want to help make life better by make a website that conveys your brand and customers remember.
            </p>
          </li>
          <li className="icon solid fa-code style3">
            <h3>Code</h3>
            <p>
              My new favorite obsession! I love learning how to make things work and look good together. Right now I am mostly into the frontend parts of code but once I feel ready, HA!, I will venture into the backend realm of code.
            </p>
            <p>I currently have knowledge with HTML5, CSS, JS, React. I have been working with GatsbyJS framework and use Netlify to help my clients have great Jamstack Websites.</p>
          </li>
          <li className="icon solid fa-headphones-alt style3">
            <h3>Music</h3>
            <p>
              Music is a very important part of my life. I go to sleep and wake up to music. What kind of music do I listen to, you may wonder. My taste is always expanding, part of what I love about todays music platforms. So easy to explore and find new artists. I love some old school twangy Country, but there is also Rock and Pop. My favorite is Singer/Songwriter, which encompasses most of my favorite artists. Americana is great to have flowing when I need some inspiration.
            </p>
          </li>
          <li className="icon fa-heart style3">
            <h3>Ollie</h3>
            <p>
              If you know me than you know that my world pretty much revolves around Ollie. He is such a great pup and very understanding of my bad singing, messy housekeeping, schedule. All he asks is for lots of walks, social time, good food and all the belly rubs! Check out his site here: <br />
              <a href="olliesworld.rocks" className="dogemoji" alt="ollies world"><span role="img" aria-label="dog emoji for Ollie">🐶</span></a>
            </p>
          </li>
          <li className="icon solid fa-low-vision style3">
            <h3>Accessibility</h3>
            <p>
              My next goal is to learn how to make everything I do accessible. I think it is great that technology is making sure it has adaptability. There are some great tools and resources to help make sure I am at least getting close to making accessible sites. If you have comments on how I can improve, please do.
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
