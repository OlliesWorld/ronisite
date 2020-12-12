import React from 'react';


import Layout from '../components/Layout';
import Project from '../components/Project';
import Games from '../components/Games'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>
        <p>Examples from my Portfolio</p>
      </header>
    <Project />
<Games />
    </article>
  </Layout>
);

export default IndexPage;
