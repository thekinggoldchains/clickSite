import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  '../components/index.scss'
import Cidades from '../components/cidades'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Cidades />
  </Layout>
)

export default IndexPage
