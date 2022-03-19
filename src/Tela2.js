import Logo from './Logo'
import Deck from './Deck'
import Rodape from './Rodape'
import React from 'react'
export default function Tela2(){
    const [texto,setTexto]=React.useState(<p>0/3 CONCLUÍDOS</p>)
    const [gabarito,setGabarito]=React.useState([])
    const [fim,setFim]=React.useState('')
    
    return(
        <main className="coluna">
            <Logo tela='2' />
            <Deck setTexto={setTexto} setGabarito={setGabarito} gabarito={gabarito} setFim={setFim} />
            <Rodape texto={texto} gabarito={gabarito} fim={fim} setTexto={setTexto}/>
        </main>
    )
}