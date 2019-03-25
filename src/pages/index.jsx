import React from "react";

import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Row from "react-bootstrap/Row";
import Human from "../images/hop.svg"
import Plants from "../images/Plants.svg"
import Home from "../images/Home.svg"
import Settings from "../images/settings.svg"
import Brain from "../images/brain.svg"
import Cloud from "../images/cloud.svg"
import { useStaticQuery, graphql } from "gatsby"

const ListItem = (svg, description) => (
    <div className="col-md-4 text-center">
      {svg}
      <p>
        <b>{description}</b>
      </p>
    </div>
);


const IndexPage = () => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
    );

    return(
        <Layout>
          <SEO title="Home" keywords={site.siteMetadata.keywords} />
          <div id="banner_base">
            <div className="diagonal_cut">
              <div className="p-4 text-left">
                <h1 class="logo">phiabo</h1>
              </div>
            </div>
            <div id="banner" className="align-items-center d-flex justify-content-center">
              <Container>
                <p className="banner_text">{site.siteMetadata.description}</p>
              </Container>
            </div>
            <div className="diagonal_cut_2">
            </div>
          </div>
          <Container className="p-5">
            <div id="human"><Human></Human></div>
            <div id="home"><Home></Home></div>
            <div>
              <h2>
                Ota tuottavuusloikka
              </h2>
              <p className="mt-5 info">
                Olemme kokeneita IT-alan ammattilaisia valmiina etsimään kanssasi ratkaisuja
                laajaan kirjoon liiketoiminnan haasteita. Oli kyseessä sitten
                rutiininomaisten tehtävien automatisointi tekoälyn keinoin tai modernin pilvialustan käyttöönotto,
                autamme sinua saavuttamaan digitaalisten valmiuksien uuden
                tason. Miltä yrityksesi liiketoiminta näyttää vuonna 2030? Mitä
                jos saavuttaisit sen jo paljon aiemmin?
              </p>
            </div>
            <Row className="mt-5 mb-5">
              {ListItem((<Brain className="highlight m-3" style={{width: '100px'}} />),
                        "Tekoäly")}
              {ListItem((<Cloud className="highlight m-3" style={{width: '100px'}} />),
                        "Pilvipalvelut")}
              {ListItem((<Settings className="highlight m-3" style={{width: '100px'}} />),
                        "Integraatiot")}
            </Row>
            <div className="spacer">
            </div>
            <div class="contact">
              <h2>
                Ota yhteyttä
              </h2>
              <p className="mt-5">
                info@phiabo.com
              </p>
              <div id="plants"><Plants></Plants></div>
            </div>
          </Container>
        </Layout>
    );};

export default IndexPage;
