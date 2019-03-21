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

import "./layout.css"
import Header from "./header"

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
            <Header />
            <div
              style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
              }}
            >
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
              </Helmet>
              <main>{children}</main>
            </div>
          </>
      )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
