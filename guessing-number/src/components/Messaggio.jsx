import Tentativo from "./Tentativo"

function Messaggio({ultimoNumero, numeroTentativi, segreto}) {
    if (ultimoNumero === undefined){
        return <p>Fai il tuo primo tentativo.</p>
    }
    let esito = null
    if (ultimoNumero > segreto){
        esito = "alto"
    }else if (ultimoNumero < segreto){
        esito = "basso"
    }else esito = "giusto"

    if (esito === "giusto"){
        return <p>indovinato, il numero era: {segreto}. 
        Indovinato in {numeroTentativi}</p>
    }
    return (
        <p> {ultimoNumero}  è troppo {esito}. tentativi: {numeroTentativi} </p>
    )
}

export default Messaggio