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
      <section className="wrapper style1">
        <h2 className="align-center style9">GitHub Repo Skills Report</h2>
        <img
          src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=OlliesWorld&skills=JavaScript,CSS,HTML,JSON&show-other-skills=true&height=250&width=950"
          alt="skills according to my Github Repos"
        />
      </section>
    </article>
  </  Layout >
)

export default ProjectsPage
