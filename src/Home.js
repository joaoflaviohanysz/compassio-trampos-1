import React from 'react';
import './App.css';
import Imagem1 from './joao.jpg';
import Imagem2 from './guitarra.jpg';

function Home() {
  return (
    <div>
      <title>Guitarra É Tesão</title>
        <h2>João</h2>
        <p>Endereço: Estrada Dona Salsicha, 6924</p>
        <img src={Imagem1} alt="foto do joao" width="300px"/>
        <img src={Imagem2} alt="foto da guita" width="300px"/>
    </div>
  );
}

export default Home;