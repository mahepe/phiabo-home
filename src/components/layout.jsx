/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";

import "./layout.scss"

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
          <>
            <div>
              <Helmet>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                  crossOrigin="anonymous"
                />
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.8.0/css/all.css"
                  integrity="sha384-Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y"
                  crossorigin="anonymous"
                />
                <link
                  href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700|Share+Tech+Mono"
                  rel="stylesheet"
                />
                <link href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700|Open+Sans:400,600,700" rel="stylesheet" />
              </Helmet>
              {children}
            </div>
              <footer className="text-center pb-1">
              </footer>
          </>
      )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
