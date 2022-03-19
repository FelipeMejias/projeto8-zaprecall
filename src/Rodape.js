import Imagem from './Imagem'
import React from 'react'
export default function Rodape({texto,gabarito,fim}){
    switch(fim){
        case "putz":
            return(
                <footer className='final coluna'>
                        <div className="linha">
                            <Imagem link="sad.png" />
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
                            <Imagem link="party.png" />
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