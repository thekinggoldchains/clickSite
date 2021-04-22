import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import '../styles/index.scss'

const Footer = ({ siteTitle }) => (
  <footer className = "site-footer">
    <div>
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
