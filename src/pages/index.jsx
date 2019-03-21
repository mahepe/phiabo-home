import React from "react"

import Logo from "../images/logo.svg";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div id="banner" className="align-items-center d-flex justify-content-center pb-5">
        <Logo id="banner_logo" />
      </div>
      <Container>
      </Container>
    </Layout>
)

export default IndexPage
