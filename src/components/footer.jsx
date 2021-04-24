import * as React from "react"
import PropTypes from "prop-types"

import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

import '../styles/index.scss'

const Footer = ({ siteTitle }) => (
  <footer className="site-footer">
    <div>
      <section className="geral">
        {/* <section className='containerbrand'>
        <div>
      <img style={{width:`20%`}} src={logo}/>
      </div>
      </section> */}
        <section className="containertext">
          Click Entregas © {new Date().getFullYear()}
          {` `}
        </section>

        <section className="containerfooter">
          <div className="facebook" >
            <link href="https://www.facebook.com/ClickEntregasCB"
              target="_blank">  
            </link>
            <FaFacebook size={32}/>
          </div>
          <div className="instagram">
            <FaInstagramSquare size={32} />
          </div>
          <div className="whatsapp">
            <FaWhatsappSquare size={32} />
          </div>
        </section>
      </section>
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
