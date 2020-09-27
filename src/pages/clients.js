import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientsList from "../components/clientslist"

const ClientsPage = () => (
  <Layout>
    <SEO title="Clients Page" />
    <h1>Clients</h1>
    <ClientsList />
  </Layout>
)

export default ClientsPage
