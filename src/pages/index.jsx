import React from "react";

import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Human from "../images/hop.svg";
import Home from "../images/Home.svg";
import { useStaticQuery, graphql } from "gatsby";

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
                tason. Miltä yrityksesi liiketoiminta näyttää kymmenen vuoden
                kuluttua? Mitä jos saavuttaisit sen jo paljon aiemmin?
              </p>
            </div>
          </Container>
          <div className="bg-color-blue">
            <div className="diagonal_cut" style={{position: 'relative'}}>
              <div className="p-4 text-left">
              </div>
            </div>
          </div>
          <div className="bg-color-blue">
            <Container className="pb-5 pl-5 pr-5 mobile-pt-5">
              <div>
                <div className="spacer">
                </div>
                <h2>
                  Miten autamme?
                </h2>
                <p className="mt-5 info">
                  <ul>
                    <li><b>API kehitykset ja integraatiot:</b> Rakennamme, ylläpidämme  ja
                      päivitämme niin GraphQL, REST kuin SOAP rajapintanne.
                    </li>
                    <li><b>Verkkosivut:</b> Rakennamme, ylläpidämme ja
                      päivitämme verkkosivunne.
                    </li>
                    <li><b>Tietokantapalvelut:</b> Datamigraatiot, ETL prosessit
                      ja Data Warehouse auditointi sekä ylläpito.
                    </li>
                    <li><b>Pilvialustojen auditointi ja käyttöönotto:</b> Autamme
                      yritystäsi pilvialustan valitsemisessa ja sen
                      ylläpidossa.
                    </li>
                    <li><b>Tekoäly- ja analytiikkapalvelut:</b> Rakennamme
                      yrityksellenne niin konenäkemiseen, kuin luonnollisen
                      kielen käsittelyyn perustuvia ohjelmistoratkaisuja.
                    </li>
                    <li><b>Liiketoiminnan kehityspalvelut:</b> Toimimme
                      strategisena kumppanina liiketoiminnan kehittämisessä.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="spacer">
              </div>
            </Container>
          </div>
          <div id="contact">
          <Container className="p-5">
            <div className="spacer">
            </div>
            <div className="text-center">
              <h2>
                Ota yhteyttä
              </h2>
              <p className="mt-5">
                info@phiabo.com
              </p>
            </div>
          </Container>
          </div>
        </Layout>
    );};

export default IndexPage;
