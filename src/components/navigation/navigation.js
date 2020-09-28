import React, { useState } from "react"
import { Flex, Box } from "reflexbox"
import { Link } from "gatsby"
import styled from "styled-components"

import BurgerIcon from "../../icons/hamburger.svg"
import CloseIcon from "../../icons/close.svg"

const BurgerButtonWrap = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`

const Menu = styled(Flex)`
  display: none !important;
  background: #333;
  z-index: 9;
  padding: 25px;
  &.open {
    display: block !important;
    position: fixed;
    top: 100px;
    left: 0;
    height: calc(100% - 100px);
    width: 100%;
  }
  .link-holder {
    margin-bottom: 10px;
    @media (min-width: 768px) {
      margin: 0;
      text-align: center;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    display: flex !important;
    background: transparent;
    width: 100%;
    padding: 25px 0;
  }
`

const Navigation = () => {

  const [menuState, setMenuState] = useState(false)

  return (
    <>
      <Flex flexWrap="wrap">
        <BurgerButtonWrap onClick={() => setMenuState(!menuState)}>
          {menuState ?
            <CloseIcon />
          :
            <BurgerIcon />
          }
        </BurgerButtonWrap>
        <Menu flexWrap="wrap" className={`nav-wrap ${menuState ? 'open' : ''}`}>
          <Box width={[1, null, 1/5]} className="link-holder">
            <Link to="/projects">{`Projects`}</Link>
          </Box>
          <Box width={[1, null, 1/5]} className="link-holder">
            <Link to="/clients">{`Clients`}</Link>
          </Box>
          <Box width={[1, null, 1/5]} className="link-holder">
            <Link to="/contacts">{`Contact`}</Link>
          </Box>
          <Box width={[1, null, 1/5]} className="link-holder">
            <Link to="/blog">{`Blog`}</Link>
          </Box>
        </Menu>
      </Flex>
    </>
  )

}

export default Navigation