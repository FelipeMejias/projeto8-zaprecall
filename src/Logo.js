import Imagem from './Imagem'

export default function Logo({tela}){
    return(
        <div className={tela==='1' ? 'logo coluna' : 'logo linha'}>
            <Imagem link={tela==='1' ? 'logo.png' : 'logo-pequeno.png'} />
            <h1>ZapRecall</h1>
        </div>
    )
}