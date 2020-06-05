import React from 'react';

import Logo from '../../assets/logo.svg';
import './styles.css';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Logo} alt="Ecoleta"/>
        </header>


        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <a href="/cadastro">
            <span>></span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;