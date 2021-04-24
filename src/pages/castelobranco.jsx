import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CB from "../components/restaurantes/castelobranco/castelobranco"

import '../components/restaurante.scss'



const CasteloBranco = () => (
  <Layout>
    <div className='geral'>
    <Seo title="Castelo Branco" />
    <section className='containerRest'>
    <CB />
    </section>
    </div>

  </Layout>
)

export default CasteloBranco
