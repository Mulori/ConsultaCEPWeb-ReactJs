import './styles.css';

import React, { useState } from "react";
import axios from 'axios';

const Home = () => {
    const [cep, setCep] = useState('');

    const search = (event) => {
        event.preventDefault();
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            alert(error);
        })
    }

    return (
        <div id="container">            
            <form method='POST' className='form' onSubmit={search}>
                <div className='div-title'>
                    <h1>CEP Web</h1>
                </div>
                <div className='field'>
                    <input 
                        type="text" 
                        name="cep" 
                        maxLength={8} 
                        placeholder="Informe o CEP" 
                        value={cep} 
                        onChange={(e) => setCep(e.target.value)}
                    >                    
                    </input>
                </div>
                <div className='actions'>
                    <button type='submit'>Consultar</button>
                </div>
            </form>
        </div>
    );
}

export default Home;