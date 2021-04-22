import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import '../styles/index.scss'

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#ffbb00`,
      marginBottom: `1.45rem`,
      fixed: `end`
    }}
    className = "site-footer"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
