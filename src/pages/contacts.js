import React from "react"
// import { Link } from "gatsby"
import { Flex, Box } from "reflexbox"
// import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const Form = styled.form`
//   label {
//     span {
//       display: block;
//       margin-bottom: 5px;
//     }
//     input, textarea {
//       appearance: none;
//       width: 100%;
//       border: 1px solid #ccc;
//     }
//   }
// `

const ContactsPage = () => (
  <Layout>
    <SEO title="Contacts Page" />
    <h1>Contact Us</h1>
    <Flex flexWrap="wrap">
      <Box width={1}>
        <p>Send us an email, or fill out the contact form.</p>
      </Box>
    </Flex>
    <Flex flexWrap="wrap" mx={-4}>
      <Box width={[1, null, 1/2]} px={4}>
        {/* <Form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <p>
            <label><span>Name</span><input type="text" name="name" /></label>   
          </p>
          <p>
            <label><span>Email</span><input type="email" name="email" /></label>
          </p>
          <p>
            <label><span>Message</span><textarea name="message"></textarea></label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit" className="btn primary">Submit</button>
          </p>
        </Form> */}

        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
          <p>
            <label>Email: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>


      </Box>
      <Box width={[1, null, 1/2]} px={4}>
        <p>{`Matthias Erne Enterprises`}</p>
        <a href="mailto:matterne@aol.com" className="btn primary">Email Us</a>
      </Box>
    </Flex>
  </Layout>
)

export default ContactsPage
