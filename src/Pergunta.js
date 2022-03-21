import Imagem from './componentes/Imagem'
import React from 'react'
import Icone from './componentes/Icone'
import Setinha from './imagens/setinha.png'
export default function Pergunta({numero,questao,resposta,setGabarito,gabarito,respostas,setRespostas,setErradas,setFinalDoJogo}){
    function responder(nivel){
        setResposta(!estResposta);
        setRespostas(respostas+1);
        setRespondida(true)
        setClassePergunta("pergunta sombra linha bloqueia")
        const icone=<Icone tipo={nivel} />
        switch(nivel){
            case "bom": setCorPergunta('bomCor');setGabarito([...gabarito,icone]);setIcone(icone);break;
            case "medio": setCorPergunta('medioCor');setGabarito([...gabarito,icone]);setIcone(icone);break;
            case "ruim": setCorPergunta('ruimCor');setGabarito([...gabarito,icone]);setIcone(icone);setErradas();break;
        }
        setFinalDoJogo(true)
    }
    const [respondida,setRespondida]=React.useState(false)
    const [classePergunta,setClassePergunta]=React.useState("pergunta sombra linha")
    const [corPergunta,setCorPergunta]=React.useState("")
    const [iconePergunta,setIcone]=React.useState(<ion-icon name="play-outline"></ion-icon>)
    const [estQuestao,setQuestao]=React.useState(false)
    const [estResposta,setResposta]=React.useState(false)
    return(
        <section>
            <div className={classePergunta} onClick={()=>{setClassePergunta("pergunta sombra linha some");setQuestao(!estQuestao)}}>
                <p className={corPergunta}>{respondida? <s>Pergunta {numero}</s>:`Pergunta ${numero}`}</p>
                {iconePergunta}
            </div>
            <div className={estQuestao?"questao card sombra":"questao card sombra some"}>
                <p>{questao}</p>
                <button onClick={()=>{setResposta(!estResposta);setQuestao(!estQuestao)}}>
                    <Imagem link={Setinha} />
                </button>
            </div>
            <div className={estResposta?'resposta card sombra':"resposta card sombra some"}>
                <p>{resposta}</p>
                <div>
                    <button onClick={()=>responder('ruim')} className="ruim">Não lembrei</button>
                    <button onClick={()=>responder('medio')} className="medio">Quase não lembrei</button>
                    <button onClick={()=>responder('bom')} className="bom">Zap!</button>
                </div>
            </div>
        </section>
    )
}