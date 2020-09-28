import React from "react"

import { Flex, Box } from "reflexbox"

import styled from "styled-components"

import CloseIcon from "../../icons/close-black.svg"

import EuroP1 from "../../videos/euro-part-1.mp4"
import EuroP2 from "../../videos/euro-part-2.mp4"
import Euro2012 from "../../videos/euro-2012.mp4"
import WC2010Algeria from "../../videos/wc-2010-algeria.mp4"
import WC2010Argentina from "../../videos/wc-2010-argentina.mp4"
import WC2010Australia from "../../videos/wc-2010-australia.mp4"
import WC2010Chile from "../../videos/wc-2010-chile.mp4"
import WC2010Ghana from "../../videos/wc-2010-ghana.mp4"
import WC2010Honduras from "../../videos/wc-2010-honduras.mp4"
import WC2010Mexico from "../../videos/wc-2010-mexico.mp4"
import WC2010NewZealand from "../../videos/wc-2010-newzealand.mp4"
import WC2010Paraguay from "../../videos/wc-2010-paraguay.mp4"
import WC2010SouthAfrica from "../../videos/wc-2010-south-africa.mp4"
import WC2010Uruguay from "../../videos/wc-2010-uruguay.mp4"
import WC2010USA from "../../videos/wc-2010-usa.mp4"
import WC2014Africa from "../../videos/wc-2014-africa.mp4"
import WC2014Australia from "../../videos/wc-2014-australia.mp4"
import WC2014CostaRica from "../../videos/wc-2014-costarica.mp4"
import WC2014Ecuador from "../../videos/wc-2014-ecuador.mp4"
import WC2014Iran from "../../videos/wc-2014-iran.mp4"
import WC2014Korea from "../../videos/wc-2014-korea.mp4"
import WC2014Nigeria from "../../videos/wc-2014-nigeria.mp4"
import WC2014Uruguay from "../../videos/wc-2014-uruguay.mp4"

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
  height: 100%;
  overflow-y: scroll;
  width: 100%;
`
const VideoBox = styled(Box)`
  p {
    font-weight: bold;
    margin-bottom: 5px;
  }
  video {
    margin-bottom: 25px;
  }
  @media (min-width: 768px) {
    &.left {
      padding-right: 10px;
    }
    &.right {
      padding-left: 10px;
    }
  }
`
const ExitModal = styled.button`
  float: right;
  background: transparent;
  border: none;
  cursor: pointer;
`

const ProjectModal = (props) => {

  const { project, setSelectedProject } = props

  const videoMap = {
    "euro-part-1.mp4": EuroP1,
    "euro-part-2.mp4": EuroP2,
    "euro-2012.mp4": Euro2012,
    "wc-2010-algeria.mp4": WC2010Algeria,
    "wc-2010-argentina.mp4": WC2010Argentina,
    "wc-2010-australia.mp4": WC2010Australia,
    "wc-2010-chile.mp4": WC2010Chile,
    "wc-2010-ghana.mp4": WC2010Ghana,
    "wc-2010-honduras.mp4": WC2010Honduras,
    "wc-2010-mexico.mp4": WC2010Mexico,
    "wc-2010-newzealand.mp4": WC2010NewZealand,
    "wc-2010-paraguay.mp4": WC2010Paraguay,
    "wc-2010-south-africa.mp4": WC2010SouthAfrica,
    "wc-2010-uruguay.mp4": WC2010Uruguay,
    "wc-2010-usa.mp4": WC2010USA,
    "wc-2014-africa.mp4": WC2014Africa,
    "wc-2014-australia.mp4": WC2014Australia,
    "wc-2014-costarica.mp4": WC2014CostaRica,
    "wc-2014-ecuador.mp4": WC2014Ecuador,
    "wc-2014-iran.mp4": WC2014Iran,
    "wc-2014-korea.mp4": WC2014Korea,
    "wc-2014-nigeria.mp4": WC2014Nigeria,
    "wc-2014-uruguay.mp4": WC2014Uruguay,
  }

  console.log(project)

  const renderVideos = (videos) => videos.map((vid, i) => {
    return (
      <VideoBox width={[1, null, 1/2]} className={`${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
        <p>{vid.country}</p>
        {/* eslint-disable */}
        <video width="320" height="240" controls>
          <source src={videoMap[vid.video]} type="video/mp4" />
        </video>
        {/* eslint-enable */}
      </VideoBox>
    )
  })

  return (
    <>
      <ModalOverlay onClick={() => setSelectedProject(null)}></ModalOverlay>
      <ModalWrap>
        <ExitModal onClick={() => setSelectedProject(null)}><CloseIcon /></ExitModal>
        <ModalContentWrap>
          <h3>{project.name} - {project.heading.split(" ")[0]}</h3>
          <p>{project.copy}</p>
          <Flex flexWrap="wrap">
            {renderVideos(project.videos)}
          </Flex>
        </ModalContentWrap>
      </ModalWrap>
    </>
  )
}

export default ProjectModal