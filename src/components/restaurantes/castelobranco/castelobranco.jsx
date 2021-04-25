import * as React from "react"

import  './styles.scss'
import free from '../../../images/free.png'


import amaya from '../../../images/amaya.png'
import espirito from '../../../images/espirito.png'
import crepes from '../../../images/crepes.png'
import dabaixa from '../../../images/dabaixa.png'
import aviz from '../../../images/aviz.jpg'
import pub from '../../../images/pub.png'
import hamburguersfrancesinhas from '../../../images/hamburguersfrancesinhas.png'
import vitorine from '../../../images/vitorine.png'
import mc from '../../../images/mc.png'

const CB = (props) => {

    return (
      <>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=ce1d95a6-3e5b-4150-a32e-b538c63c3639&restaurant_uid=49459380-ef6d-4f19-9172-30ade05b40e6&facebook=true"
            target="_blanck"
          >
            <img src={amaya} alt="rest" />
            <p>Amaya Sushi</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=45c7a59e-678d-461a-8d08-e94f200f0d94&restaurant_uid=1c18bb5b-c78e-4422-a9db-9dceb3cfaf27&facebook=true"
            target="_blanck"
          >
            <img src={espirito} alt="rest" />
            <p> Espirito Selvagem</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=0be77493-dc59-4e32-a112-68cfa7ffac15&restaurant_uid=e9f32b2b-9047-4ae2-934a-03d07409b1b9&facebook=true"
            target="_blanck"
          >
            <img src={crepes} alt="rest" />
            <p> Crepes Artesanais</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=0efbd0fd-ff20-4573-9a28-5761b9fdc92e&restaurant_uid=6e3786c0-013e-4b12-9ac8-9fd40ef1a83f&facebook=true"
            target="_blanck"
          >
            <img src={dabaixa} alt="rest" />
            <p> Hamburgueria da Baixa</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=f3983655-a33c-4020-844a-5b18cafbe05c&restaurant_uid=b210443f-c13e-4cd9-a031-c9e31219176e&facebook=true"
            target="_blanck"
          >
            <img src={aviz} alt="rest" />
            <p> Aviz</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=07e562cd-f642-4436-b93d-1c0f63df17d4&restaurant_uid=965048a1-77ec-4a59-814f-d05080fc5de3&facebook=true"
            target="_blanck"
          >
            <img src={pub} alt="rest" />
            <p> Pub Tabacaria</p>
          </a>
        </div>
        <div className="card">
          <div className='tag'>
            <img className='free' src = {free} alt='promo'/>
            <p>Entrega Grátis</p>
          </div>
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=0f14a2a4-dbd7-4f81-b4ec-7bfb71ca2f38&restaurant_uid=8cebe05e-6ec5-4027-b002-3027b17f6887&facebook=true"
            target="_blanck"
          >
            <img src={hamburguersfrancesinhas} alt="rest" />
            <p className='passou'>FS - Hamburgues e Francesinhas</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/?facebook=true&restaurant_uid=f9f3545b-a11d-4f06-9a24-77c0e4dc58f0&company_uid=c7467063-51d3-418a-91e6-502ddc42c78b"
            target="_blanck"
          >
            <img src={vitorine} alt="rest" />
            <p> Don Vitorine</p>
          </a>
        </div>
        <div className="card" id='brevemente'>
          <a
            href=""
            target="_blanck"
          >
            <img src={mc} alt="rest" />
            <p> Pedidos MC (Brevemente)</p>
          </a>
        </div>
      </>
    )

}


export default CB