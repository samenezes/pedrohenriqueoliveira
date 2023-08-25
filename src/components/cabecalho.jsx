import React from 'react'
import './cabecalho.css'

export default function Cabecalho() {
    return (
      <div className="topo">

            <div className="text"><h1>Prova Final - Pedro Martins</h1></div>
            <button className="botao">Aplicar</button>
      </div>
    );
}

function primaryRequest() {
    const itens= fetch('https://opentdb.com/api.php?amount=30&category=18').then(framework=>{

    framework.json().then(prova=>{

        console.log(prova.data)
        })
    })}

primaryRequest()
