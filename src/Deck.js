import Pergunta from './Pergunta'
import React from 'react'
export default function Deck({setTexto,setGabarito,gabarito,setFim}){
    const deckEmOrdem=[
        {pergunta: 'Quem foi o primeiro campeão da copa?',resposta:'Uruguai'},
        {pergunta: 'Quem foi o último campeão da copa?',resposta:'França'},
        {pergunta: 'Quem foi campeão da copa mais vezes?',resposta:'Brasil'},
        {pergunta: 'Quem foi o maior goleador em copas?',resposta: 'Miroslav Klose'},
        {pergunta: 'Qual país sediou a copa de 2018?',resposta:'Rússia'},
        {pergunta: 'Qual país sediou a copa de 2014', resposta:'Brasil'},
        {pergunta:'Quem ganhou a copa de 2014?',resposta:'Alemanha'},
        {pergunta:'Quem ganhou a copa de 2010?',resposta:'Espanha'}
    ]
    
    const [deck,setDeck]=React.useState(deckEmOrdem.sort(()=>Math.random() - 0.5))
    const [respostas,setRespostas]=React.useState(0)
    const [erradas,setErradas]=React.useState(false)
    const [jogoFinalizado,setFinalDoJogo]=React.useState(false)
    if(jogoFinalizado){
        setTexto(<p>{respostas}/{deck.length} CONCLUÍDOS</p>)
        if(respostas===deck.length){
        setFim(erradas ? 'putz' : 'parabens')
        }setFinalDoJogo(false)
    }
    
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
                    respostas={respostas}
                    setRespostas={setRespostas}
                    setErradas={()=>setErradas(true)}
                    setFinalDoJogo={setFinalDoJogo}
                />
            )}
        </ul>
    )
}