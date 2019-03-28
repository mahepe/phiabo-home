import React from "react";

import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typed from 'react-typed';

import Human from "../images/standing-5.svg";
import Home from "../images/Home.svg";
import Human2 from "../images/sitting-1.svg";
import Human3 from "../images/sitting-8.svg";

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
                <p className="banner_text">
                  <Typed
                    strings={[site.siteMetadata.description]}
                    typeSpeed={40}
                  />
                </p>
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
                tason. {site.siteMetadata.description} Mitä jos saavuttaisit sen
                jo paljon aiemmin?
              </p>
            </div>
          </Container>
          <Container className="pb-5 pl-5 pr-5 mobile-pt-5">
            <div>
              <div className="spacer">
              </div>
              <h2>
                Miten autamme?
              </h2>
              <p className="mt-5 info">
                <ul>
                  <li><b>Rajapinnat ja integraatiot:</b> Rakennamme, ylläpidämme  ja
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
          </Container>
          <Container className="p-5 contact text-center">
            <div id="human2"><Human2></Human2></div>
            <div id="human3"><Human3></Human3></div>
            <div className="mt-5">
              <h2>
                Ota yhteyttä
              </h2>
              <p className="mt-5">
                info@phiabo.com
              </p>
            </div>
          </Container>
        </Layout>
    );};

export default IndexPage;
