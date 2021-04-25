import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cv from "../components/restaurantes/covilha/covilha.jsx"

import '../components/restaurante.scss'



const CasteloBranco = () => (
  <Layout>
    
    <Seo title="Covilhã" />
    <section className='containerRest'>
    <Cv />
    </section>


  </Layout>
)

export default CasteloBranco
