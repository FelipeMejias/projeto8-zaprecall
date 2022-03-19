import Pergunta from './Pergunta'
import React from 'react'
export default function Deck({setTexto,setGabarito,gabarito,setFim}){
    const deck=[
        {pergunta: 'quem sou eu',resposta:'felipe'},
        {pergunta: 'quantos anos',resposta:'24'},
        {pergunta: 'onde moro',resposta:'rio de janeiro'}
    ]
    const [respostas,setRespostas]=React.useState(0)
    const [erradas,setErradas]=React.useState(false)
    function encerrar(){if(respostas===2){
        let frase
        if(erradas){ frase='putz'}else{frase= 'parabens'}
        setFim(frase)
    }}
    
    return(
        <ul>
            {deck.map((objeto,indice)=>
                <Pergunta
                    key={objeto.pergunta}
                    numero={indice+1} 
                    questao={objeto.pergunta} 
                    resposta={objeto.resposta} 
                    setGabarito={setGabarito} 
                    gabarito={gabarito} 
                    qtdDeck={deck.length}
                    setTexto={setTexto}
                    respostas={respostas}
                    setRespostas={setRespostas}
                    setErradas={()=>setErradas(true)}
                    encerrar={encerrar}
                />
            )}
        </ul>
    )
}