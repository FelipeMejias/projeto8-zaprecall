import Imagem from './Imagem'
import LogoGrande from './../imagens/logo.png'
import LogoPequena from './../imagens/logo-pequeno.png'

export default function Logo({tela}){
    return(
        <div className={tela==='1' ? 'logo coluna' : 'logo linha'}>
            <Imagem link={tela==='1' ? LogoGrande : LogoPequena} />
            <h1>ZapRecall</h1>
        </div>
    )
}