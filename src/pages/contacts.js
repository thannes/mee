import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactsPage = () => (
  <Layout>
    <SEO title="Contacts Page" />
    <h1>Contact Us</h1>
    <p>{`Matthias Erne Enterprises`}</p>
    <a href="mailto:matterne@aol.com" className="btn primary">Email Us</a>
  </Layout>
)

export default ContactsPage
