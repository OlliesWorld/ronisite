import React from 'react';

import Layout from '../components/Layout';
import Ollie from '../assets/images/ollie_toon.png';


const AboutPage = () => (
    <Layout>
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
  <p>
    The 6 boxes above are just a few things that are important to me. I could talk forever about music, movies and don't mention Horses! Books used to be a big part of my life that I need to get back into. Let me what book I should dive into next.
    </p>
</div>
</section>
</Layout>
);
export default AboutPage