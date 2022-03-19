import ReactDOM from 'react-dom'
import Logo from './Logo'
import Botao from './Botao'
import Tela2 from './Tela2'

function App(){
    function iniciar(){
        document.querySelector('.telaInicio').classList.add('some')
        document.querySelector('main').classList.remove('some')
    }
    return(
    <> 
        <div className='telaInicio coluna some'>
            <Logo tela='1' />
            <button className="sombra botaoInicio" onClick={iniciar}>Iniciar Recall!</button>
            
        </div>
        <Tela2 />
    </>   
    )
}

const root=document.querySelector('.root')
ReactDOM.render(<App />,root)

//<Botao texto="Iniciar Recall!" classe="sombra botaoInicio" funcao={iniciar}