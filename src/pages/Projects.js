import React from 'react'

import Layout from '../components/Layout'
import Project from '../components/Project'
import Games from '../components/Games'


const ProjectsPage = () => (

  < Layout fullMenu>
    <article id="main">
      <header>
        <h2>Projects</h2>

      </header>
      <Project />
      <Games />

    </article>
  </  Layout >
)

export default ProjectsPage
