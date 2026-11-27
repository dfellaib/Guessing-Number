import { useState } from 'react'
import { MAX_NUM, MIN_NUM } from "./configuration.js"

import Tentativo from './components/Tentativo.jsx';
import Messaggio from './components/Messaggio.jsx';
import Storico from './components/Storico.jsx';


/**
 * Lo stato minimo della partita: il numero da indovinare e i tentativi fatti. 
 * Tutte le altre informazioni sono derivabili (quindi non mi serve useState)
 * 
 * Esempio
 *    segreto = 42
 *    tentativi = [10,50,40,42]
 */
function App() {
  const [segreto, setSegreto] = useState(numeroCasuale());
  const [tentativi, setTentativi] = useState([]); // Array di tentativi 

  const ultimoTentativo = tentativi[tentativi.length-1]
  const vittoria = ultimoTentativo === segreto;

  function numeroCasuale() {
    const numeroCasuale = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;
    console.log(numeroCasuale);
    return numeroCasuale;
  }

  function gioca(numero) {
    // usiamo lo spread operator per copiare i valori di tentativi aggiungendo il numero scritto in input dall'utente
    // usiamo un nuovo array e non un push di numero perchè react si accorge del cambio di stato solo così
    setTentativi([...tentativi, numero])
    console.log("numero:" + numero);
    console.log("segreto: " + segreto);
  }

  // reset del mio stato al punto di inizio (nuovo numero casuale e nuovo array di tentativi)
  function nuovaPartita() {
    setSegreto(numeroCasuale());
    setTentativi([]);
  }

  return (
    <main>
      <h1>Guessing Number - React version</h1>
      <p>Ho pensato un numero da {MIN_NUM} a {MAX_NUM} </p>
      <p>Numero segreto estratto: {segreto} (Cheat mode)</p>

      <Tentativo onGioca={gioca} disabilitato={vittoria} />
      <Messaggio />
      <Storico />

      {/** Se metto () dopo nuovaPartita, ho errore "Too many re-renders. React limits the number of renders to prevent an infinite loop" */}
      <button onClick={nuovaPartita}>Nuova Partita</button>

    </main>
  )
}

export default App
