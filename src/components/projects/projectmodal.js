import React from "react"

import styled from "styled-components"

import CloseIcon from "../../icons/close-black.svg"

const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(0,0,0,.4);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
`
const ModalWrap = styled.div`
  max-width: 800px;
  position: fixed;
  background: #fff;
  height: calc(100% - 50px);
  width: calc(100% - 50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  z-index: 10;
`
const ModalContentWrap = styled.div`
`
const ExitModal = styled.button`
  float: right;
  background: transparent;
  border: none;
  cursor: pointer;
`

const ProjectModal = (props) => {

  const { project, setSelectedProject } = props

  console.log(project)

  // const renderVideos = (videos) => videos.map((vid, i) => {
  //   return (
  //     <>
  //       <p>{vid.country}</p>
  //       <p>{vid.video}</p>
  //       <video src={`../../assets/${vid.video}`}></video>
  //     </>
  //   )
  // })

  return (
    <>
      <ModalOverlay onClick={() => setSelectedProject(null)}></ModalOverlay>
      <ModalWrap>
        <ExitModal onClick={() => setSelectedProject(null)}><CloseIcon /></ExitModal>
        <ModalContentWrap>
          <h3>{project.name} - {project.heading.split(" ")[0]}</h3>
          <p>{project.copy}</p>
          {/* {renderVideos} */}
        </ModalContentWrap>
      </ModalWrap>
    </>
  )
}

export default ProjectModal