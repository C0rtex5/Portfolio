// home section

import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [portfolioText, setPortfolioText] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Velocidade da animação em milissegundos

  const handleTextChange = (event) => {
    setPortfolioText(event.target.value);
  };

  useEffect(() => {
    // Efeito que simula a digitação
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(portfolioText.substring(0, index));
      index++;
      if (index > portfolioText.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => {
      clearInterval(timer);
    };
  }, [portfolioText]);

  return (
    <div>
      <h1>Meu Portfólio</h1>
      <textarea
        placeholder="Oi, eu sou o Abhay Mendes! Tô aprendendo a ser um mestre do design UX/UI. E quando não tô nisso, tô curtindo arte, meu hobby favorito. Bora criar coisas incríveis! 🚀🎨"
        value={portfolioText}
        onChange={handleTextChange}
      />
      <div>
        <h2>Texto do Portfólio:</h2>
        <p>{displayedText}</p>
      </div>
    </div>
  );
};

export default Portfolio;

// about-me section

// skills section
