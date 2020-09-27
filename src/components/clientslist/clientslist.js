import React from "react"
import Image from "../image"
// import { Link } from "gatsby"
import { Flex } from "reflexbox"
// import styled from "styled-components"

import { data } from "./data"

const ClientsList = () => {

  const { clients } = data

  console.log(clients)

  const renderClientsList = clients.map((client, i) => 
    <Image filename={client} alt={client} key={i} />
  )

  return (
    <div className="container">
      <Flex flexwrap="wrap">
        {renderClientsList}
      </Flex>
    </div>
  )

}

export default ClientsList
