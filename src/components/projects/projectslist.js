import React, { useState } from "react"
import { Flex, Box } from "reflexbox"
import styled from "styled-components"

import Image from "../image"
import ProjectModal from "./projectmodal"

const ProjectCard = styled(Flex)`
  margin-bottom: 50px;
  h2 {
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 5px;
  }
  button {
    padding: 0;
    background: transparent;
    color: #183C6B;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }
`
const ImageBox = styled(Box)`
  padding-right: 25px;
  padding-bottom: 25px;
  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`
const ContentBox = styled(Box)`
  padding-bottom: 25px;
  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`

const ProjectsList = (props) => {

  const { projects } = props

  const [selectedProject, setSelectedProject] = useState()

  const renderProjects = projects.map((project, i) => {
    return (
      <React.Fragment key={i}>
        <ProjectCard flexwrap="wrap">
          <ImageBox width={[1/4, null, 1/6]}>
            <Image filename={project.logo} alt={project.name} />
          </ImageBox>
          <ContentBox width={[3/4, null, 5/6]}>
            <h2>{project.name}</h2>
            <p>{project.copy.substring(0, 100)}{`...`}</p>
            <button onClick={() => setSelectedProject(i)}>{`Read more`}</button>
          </ContentBox>
        </ProjectCard>
        {selectedProject === i &&
          <ProjectModal project={project} setSelectedProject={setSelectedProject}/>
        }
      </React.Fragment>
    )
  })

  return (
    <>
      {renderProjects}
    </>
  )

}

export default ProjectsList