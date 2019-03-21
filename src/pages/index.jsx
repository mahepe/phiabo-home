import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        <div id="banner" className="align-items-center d-flex justify-content-center pb-5">
          <p className="display-3 text-center">Lorem ipsum dolor sit amet, consectetur?
            Adipiscing elit.</p>
        </div>
        <div>
          <p>
            Cubilia suspendisse facilisi cum vitae torquent convallis justo
            odio. Neque torquent neque enim quisque laoreet congue semper auctor
            justo et sapien. Morbi ultrices facilisi cras? Tempus mi non sit
            malesuada scelerisque rhoncus euismod penatibus nec! Ultrices litora
            nec non facilisi sed ut nullam massa ipsum primis duis feugiat!
            Libero dolor auctor posuere nisi id cursus cursus. Rhoncus lacus
            dictumst mattis parturient erat lacinia morbi. Habitasse nec
            torquent dolor primis posuere.
          </p>
        </div>
        <Row className="mt-5 mb-5">
          <div className="col-md-4 text-center">
            <img
              src="https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png"
            />
            <p>
            <b>Neque torquent</b>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png"
            />
            <p>
            <b>Ultrices</b>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png"
            />
            <p>
            <b>Libero dolor</b>
            </p>
          </div>
        </Row>
      </Container>
    </Layout>
)

export default IndexPage
