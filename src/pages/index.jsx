import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Logo from "../images/logo.svg"
import Settings from "../images/settings.svg"

const ListItem = (img_src, description) => (
    <div className="col-md-4 text-center">
      <Settings className="highlight m-3" style={{width: '100px'}} />
      <p>
        {description}
      </p>
    </div>
);

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div id="banner_base">
      <div className="diagonal_cut">
      <div className="p-4 text-left">
      <Logo className="navbar-brand highlight" />
      </div>
      </div>
          <div id="banner" className="align-items-center d-flex justify-content-center">
        <Container>
          <p className="banner_text">Miltä yrityksesi liiketoiminta näyttää
            vuonna 2025?</p>
        </Container>
        </div>
        <div className="diagonal_cut_2">
          </div>
      </div>
      <Container className="p-5">
        <div>
          <h2>
            Autamme sinua ottamaan tuottavuusloikan
          </h2>
          <p className="mt-5">
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
          {ListItem("https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png",
                    "Tekoäly")}
          {ListItem("https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png",
                    "Pilvipalvelut")}
          {ListItem("https://uudenmaanseuramatkat.fi/wp-content/uploads/2018/11/placeholder.png",
                    "Integraatiot")}
        </Row>
        <div className="spacer">
        </div>
        <div>
          <h2>
            Purus sit sapien
          </h2>
          <p className="m-0">
            ultrices@phiabo.com
          </p>
          <p>
            +358 44 000 0000
          </p>
        </div>
        </Container>
    </Layout>
);

export default IndexPage;
