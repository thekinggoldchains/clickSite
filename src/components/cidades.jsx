import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Covilha from '../images/Covi.png'
import CB from '../images/CB.png'
import '../styles/index.scss'

const Cidades = ({ siteTitle }) => (
  <section className="flex flex-wrap">
    <div className="item">
      <Link to="/castelobranco">
        <img src={CB} alt="cb" />
      </Link>
    </div>
    <div className="item">
      <Link to='/covilha'> 
        <img src={Covilha} alt="covi" />
      </Link>
    </div>
  </section>
)

Cidades.propTypes = {
  siteTitle: PropTypes.string,
}

Cidades.defaultProps = {
  siteTitle: ``,
}

export default Cidades