import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects Page" />
    <h1>Projects</h1>
    <Projects />
  </Layout>
)

export default ProjectsPage
