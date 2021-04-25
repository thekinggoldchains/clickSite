import * as React from "react"
import PropTypes from "prop-types"

import '../styles/index.scss'
import fb from '../images/facebook.png'
import ig from '../images/instagram.png'
import wpp from '../images/whatsapp.png'

const Footer = ({ siteTitle }) => (
  <footer className="site-footer">
    <div>
      <section>
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
          <div className="facebook">
            <a
              href="https://www.facebook.com/ClickEntregasCB"
              target="_blank"
              rel="fb"
            >
              <img src={fb} alt="fb" />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/clickentregas_pt/"
              target="_blank"
              rel="fb"
            >
              <img src={ig} alt="fb" />
            </a>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/351966361955" target="_blank" rel="fb">
              <img src={wpp} alt="fb" />
            </a>
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
