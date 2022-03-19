
export default function Botao({texto,classe,funcao}){
    
    return(
        <button className={classe} onClick={funcao} ><p>{texto}</p></button>
    )
}