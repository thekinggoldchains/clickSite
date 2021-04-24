import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import  './styles.scss'

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
        <div className='card'>
            <img src={amaya} alt="rest"/>
            <p>Amaya Sushi</p>
        </div>
        <div className='card'>
            <img src={espirito} alt="rest"/>
            <p> Espirito Selvagem</p>
        </div>
        <div className='card'>
            <img src={crepes} alt="rest"/>
            <p> Crepes Artesanais</p>
        </div>
        <div className='card'>
            <img src={dabaixa} alt="rest"/>
            <p> Hamburgueria da Baixa</p>
        </div>
        <div className='card'>
            <img src={aviz} alt="rest"/>
            <p> Aviz</p>
        </div>
        <div className='card'>
            <img src={pub} alt="rest"/>
            <p> Pub Tabacaria</p>
        </div>
        <div className='card'>
            <img src={hamburguersfrancesinhas} alt="rest"/>
            <p>FS - Hamburgues e Francesinhas</p>
        </div>
        <div className='card'>
            <img src={vitorine} alt="rest"/>
            <p> Don Vitorine</p>
        </div>
        <div className='card'>
            <img src={mc} alt="rest"/>
            <p> Pedidos MC</p>
        </div>
        <div className='card'>
            <img src={mc} alt="rest"/>
            <p> Pedidos MC</p>
        </div>
        <div className='card'>
            <img src={mc} alt="rest"/>
            <p> Pedidos MC</p>
        </div>
        <div className='card'>
            <img src={mc} alt="rest"/>
            <p> Pedidos MC</p>
        </div>

        </>
    )

}


export default CB