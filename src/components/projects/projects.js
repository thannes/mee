import React from "react"
import ProjectsList from "./projectslist"

import { data } from "./data.js"

const Projects = () => {

  return (
    <>
      <ProjectsList projects={data.projects} />
    </>
  )
}

export default Projects