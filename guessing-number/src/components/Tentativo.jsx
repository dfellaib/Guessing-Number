import { useState } from 'react'

/**
 * Tentativo rappresenta il campo di input e il pulsante per provare a giocare. Il testo che esce fuori 
 * fa parte dello stato del componente. Al componente parent arriva solo il numero se valido
 */
function Tentativo() {
    const [testo, setTesto] = useState(""); 
    const [errore, setErrore] = useState(""); 

    return (
        <div>
            <p>Prova componente Tentativo</p>
        </div>
    )

}

export default Tentativo; 