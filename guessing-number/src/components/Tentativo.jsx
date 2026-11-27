import { useState } from 'react'
import { MAX_NUM, MIN_NUM } from "../configuration.js"

/**
 * Tentativo rappresenta il campo di input e il pulsante per provare a giocare. Il testo che esce fuori 
 * fa parte dello stato del componente. Al componente parent arriva solo il numero se valido
 */
function Tentativo({onGioca, disabilitato}) {
    const [testo, setTesto] = useState(""); 
    const [errore, setErrore] = useState(""); 

    function conferma() {
        const numero = Number(testo);
        if(numero < MIN_NUM || numero > MAX_NUM) {
            setErrore("Inserisci un numero nel range previsto")
            return;
        }
        setErrore('');
        setTesto('');
        onGioca(numero);
    }
    return (
        <div>
            <input
            type='number'
            value={testo}
            disabled={disabilitato}
            onChange={(e) => setTesto(e.target.value)}
            placeholder='Inserisci il tuo numero'
             />
            <button 
            onClick={conferma}
            disabled={disabilitato}
            >
            Gioca</button>
            {errore && <p>{errore}</p>}
        </div>
    )

}

export default Tentativo;