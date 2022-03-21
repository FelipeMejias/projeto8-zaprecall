import Imagem from './componentes/Imagem'
import React from 'react'
import Parabens from './imagens/party.png'
import Putz from './imagens/sad.png'
export default function Rodape({texto,gabarito,fim}){
    switch(fim){
        case "putz":
            return(
                <footer className='final coluna'>
                        <div className="linha">
                            <Imagem link={Putz} />
                            <p><strong>PUTZ!</strong></p>
                        </div>
                        <div className='caixatexto'><p>Ainda faltaram alguns...
                            Mas não desanime!</p></div>
                    
                    <div>{gabarito.map(k=>k)}</div>
                </footer>
                )
        case "parabens":
             return( 
                <footer className="final coluna">
                        <div className="linha">
                            <Imagem link={Parabens} />
                            <p><strong>PARABÉNS!</strong></p>
                        </div>
                        <div className='caixatexto'><p>Você não esqueceu de nenhum flashcard!</p></div>
                    
                    <div>{gabarito.map(k=>k)}</div>
                </footer>  
                )
        default:
            return(
                <footer className='coluna'>
                    <div>{texto}</div>
                    <div>{gabarito.map(k=>k)}</div>
                </footer>
            )
    }

}