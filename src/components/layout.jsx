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
              </Helmet>
              {children}
            </div>
            <footer className="text-center pb-1">
              <div>Icons made by <a href="https://www.freepik.com/"
                                    title="Freepik">Freepik</a> from <a
                                                                       href="https://www.flaticon.com/"
                                                                      title="Flaticon">www.flaticon.com</a>
                . Licensed by <a
                                 href="http://creativecommons.org/licenses/by/3.0/"
                                 title="Creative Commons BY 3.0"
                                 target="_blank">CC 3.0 BY</a></div>
            </footer>
          </>
      )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
