import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Covilha from '../../images/covi.png'
import CB from '../../images/CB.png'
import './index.scss'

import banner from '../../images/capa.png'

const Cidades = ({ siteTitle }) => (
  <>  
  <section className='containerbanner' >
    <div>
      <img src={banner} alt="banner"/>
    </div>
  </section>
  

  <section className="containerCid">
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
  </>
)

Cidades.propTypes = {
  siteTitle: PropTypes.string,
}

Cidades.defaultProps = {
  siteTitle: ``,
}

export default Cidades