import ReactDOM from 'react-dom'
import Logo from './componentes/Logo'
import Botao from './componentes/Botao'
import Tela2 from './Tela2'
import './css/reset.css'
import './css/estilo.css'

function App(){
    function iniciar(){
        document.querySelector('.telaInicio').classList.add('some')
        document.querySelector('main').classList.remove('some')
    }
    return(
    <> 
        <div className='telaInicio coluna'>
            <Logo tela='1' />
            
            <Botao texto="Iniciar Recall!" classe="sombra botaoInicio" funcao={iniciar} />
        </div>
        <Tela2 />
    </>   
    )
}

const root=document.querySelector('.root')
ReactDOM.render(<App />,root)


//<button className="sombra botaoInicio" onClick={iniciar}>Iniciar Recall!</button>