import React from 'react'
import api from './api'
import './App.css';

function App() {
    const [ isDolar, setIsDolar ] = React.useState(true)
    const [ resultado, setResultado ] = React.useState('')
    const [ valor, setValor ] = React.useState('');
    
    function converter(){
        let tipo = "euro";
        if (isDolar) {
            tipo = "dolar"
        }
        api.post(`/converter`, { 
            tipoMoeda: tipo,
            valor: valor
        }).then((res) => {
            setResultado(res.data.valorReal)
        }).catch((err) => {
            console.error(err)
        })
    }
    
    return (
        <div className="App App-header">  
            <h2>Convertor de Moedas</h2>
            { isDolar ? 
                <>
                    <p>Convertor de Dólar em Real</p>
                    <label>Valor a converter: <input type="number"  value={valor} onChange={(e) => setValor(e.target.value)} /></label>
                    { resultado ?
                        <p>Valor convertido em Reais: {resultado}</p>
                    : null}
                    <button onClick={() => converter()}>Resolver</button>
                    <button onClick={() => setIsDolar(false)}>Quero Converter de Euro para Real</button>
                </>
            : 
                <>
                    <p>Convertor de Euro em Real</p>
                    <label>Valor a converter: <input type="number"  value={valor} onChange={(e) => setValor(e.target.value)} /></label>
                    { resultado ?
                        <p>Valor convertido em Reais: {resultado}</p>
                    : null}
                    <button onClick={() => converter()}>Resolver</button>
                    <button onClick={() => setIsDolar(true)}>Quero Converter de Dólar para Real</button>
                </>
            }
        </div>
    );
}

export default App;
