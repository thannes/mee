import React from "react"
import Image from "../image"
import { Flex, Box } from "reflexbox"
// import styled from "styled-components"

import { data } from "./data"

const ClientsList = () => {

  const { clients } = data

  console.log(clients)

  const renderClientsList = clients.map((client, i) => 
    <Box width={[1/2, 1/4, 1/6]}>
      {/* <p>{client}</p> */}
      <Image filename={client} alt={client} key={i} />
    </Box>
  )

  return (
    <div className="container">
      <Flex flexWrap="wrap">
        {renderClientsList}
      </Flex>
    </div>
  )

}

export default ClientsList
