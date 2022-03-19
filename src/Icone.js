export default function Icone({tipo}){
    let classe
    let nome
    switch(tipo){
        case "bom": classe="bomIcone"; nome="checkmark-circle-outline"; break;
        case "medio": classe="medioIcone" ; nome="help-circle-outline" ;break;
        case "ruim": classe="ruimIcone" ; nome="close-circle-outline" ;break;
    }
    return(
        <span className={classe}>
        <ion-icon name={nome}></ion-icon>
        </span>
    )
}