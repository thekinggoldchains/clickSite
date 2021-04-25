import * as React from "react"

import  '../castelobranco/styles.scss'
import free from '../../../images/free.png'

import amaya from '../../../images/amaya.png'
import monumental from '../../../images/monumental.png'
import beira from '../../../images/beira.jpg'
import donpapao from '../../../images/donpapao.png'
import mrcone from '../../../images/mr.cone.png'
import pub from '../../../images/pub.png'
import gelateria from '../../../images/logo1.png'

const CV = (props) => {

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
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=bab6413e-f4f7-4ea5-ab02-8bd6e66025ed&restaurant_uid=22cd5725-37e7-4809-a60a-8695436e9714&facebook=true"
            target="_blanck"
          >
            <img src={monumental} alt="rest" />
            <p>Monumental</p>
          </a>
        </div>
        <div className="card">
          <div className="tag">
            <img className="free" src={free} />
            <p>Entrega Grátis</p>
          </div>
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=cabb331a-cde6-4ce1-8c89-385d07a7664f&restaurant_uid=34b002ca-092b-4b77-8bb5-86d4cf9f1183&facebook=true"
            target="_blanck"
          >
            <img src={beira} alt="rest" />
            <p>Hamburgueria Beirã</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=a08fd191-8b4b-48a3-acdb-480639053317&restaurant_uid=f387c499-f09f-4ce6-87cf-cca629350944&facebook=true"
            target="_blanck"
          >
            <img src={donpapao} alt="rest" />
            <p>Don Papão</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=37e54cd7-ab63-4be1-a314-c6e882e1851e&restaurant_uid=58e50218-ef51-4dde-8ac6-90ade53cedb3&facebook=true"
            target="_blanck"
          >
            <img src={mrcone} alt="rest" />
            <p>Mr. Cone</p>
          </a>
        </div>
        <div className="card">
          <a
            href="https://www.restaurantlogin.com/ordering/restaurant/menu?company_uid=07e562cd-f642-4436-b93d-1c0f63df17d4&restaurant_uid=9bfd9509-1db5-459d-a8e1-d0ae86592aec&facebook=true"
            target="_blanck"
          >
            <img src={pub} alt="rest" />
            <p> Pub Tabacaria</p>
          </a>
        </div>
        <div className="card">
          {/* <a
            href=""
            target="_blanck"
          > */}
            <img src={gelateria} alt="rest" />
            <p>Gelateria D´Avó (Brevemente)</p>
          {/* </a> */}
        </div>
      </>
    )

}


export default CV