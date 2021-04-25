import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cb from "../components/restaurantes/castelobranco/castelobranco"

import '../components/restaurante.scss'



const CasteloBranco = () => (
  <Layout>
    <div className='geral'>
    <Seo title="Castelo Branco" />
    <section className='containerRest'>
    <Cb />
    </section>
    </div>

  </Layout>
)

export default CasteloBranco
