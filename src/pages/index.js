import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BodyCopy = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BodyCopy>{`Matthias Erne Enterprises (MEE) is a San Diego-based Television production company, specializing in sports features. We bring our clients from all around the world the story behind the scenes and the exclusive access to some of the brightest stars in the world, Lionel Messi, Gianni Buffon, Thomas Mueller, Joachim Loew, Robert Lewandowski, Luis Suarez, James Rodriguez, Peter Cech, Luca Toni, Franck Ribery, Carlos Alberto Parreira, Jose Pekerman, Morten Olsen and many, many more...`}</BodyCopy>
    <Link to="/projects" className="btn primary centered">{`Projects`}</Link>
  </Layout>
)

export default IndexPage
