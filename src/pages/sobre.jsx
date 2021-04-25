import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"
import logo from '../images/logo.png'

const Sobre = () => (
  <Layout>
    <Seo title="Castelo Branco" />
    <Container className = 'containerabout'>
    <h1>Sobre a Click Entregas</h1>
    
    <p>
      A empresa nasceu devido a situação que vivemos, com base nas necessidades
      da população em geral. Seu propósito é resolver os problemas através de
      soluções acessíveis, que facilitem a vida de nossos clientes e adequem-se
      a rotina contemporânea. Levamos a si, as melhores opções e com as melhores
      condições tudo isso, em um CLICK!
    </p>
    <div className='about'>
      <img src={logo} alt=''/>
     </div>
    </Container>
    
  </Layout>
)

export default Sobre
