import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  '../components/index.scss'

import Capa from '../images/capa_site.png'
import Covilha from '../images/Covi.png'
import CB from '../images/CB.png'
import { Card, CardBody } from "reactstrap"



const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className='container'>
      <div style={{
        flexDirection: `row`
      }}>
      <ul>
        <li><img src={CB}/></li>
        <li>
          <img src={Covilha}/>
          
        </li>
      </ul>
      </div>

    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
