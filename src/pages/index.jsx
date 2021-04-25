import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  '../components/cidades/index.scss'
import  Cidades  from '../components/cidades/cidades'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Cidades />
  </Layout>
)

export default IndexPage
