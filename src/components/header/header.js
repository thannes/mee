import { Link } from "gatsby"
import React from "react"
import { Flex, Box } from "reflexbox"
import styled from "styled-components"

import Navigation from "../navigation"

const HeaderWrap = styled.header`
  background: #2d2d2d;
`
const HeaderFlex = styled(Flex)`
  height: 100px;
  align-items: center;
`

const LogoHolder = styled.h1`
  font-size: 24px;
  line-height: 32px;
  a {
    color: #f2f2f2;
    text-decoration: none;
  }
`
const NavBox = styled(Box)`
  align-self: center;
`

const Header = () => (
  <HeaderWrap>
    <div className="container">
      <HeaderFlex flexWrap="wrap">
        <Box width={[7/8, null, 1/4]}>
          <LogoHolder style={{ margin: 0 }}>
            <Link to="/">
              {`Matthias Erne`}
            </Link>
          </LogoHolder>
        </Box>
        <NavBox width={[1/8, null, 3/4]}>
          <Navigation />
        </NavBox>
      </HeaderFlex>
    </div>
  </HeaderWrap>
)

export default Header
