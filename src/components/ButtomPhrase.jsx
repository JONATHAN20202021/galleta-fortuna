import React from 'react';
import phrases from'../utils/phrases.json';
import randomIndex from '../services/randomIndex';
import bgArray from '../utils/bgArray.json';


const ButtomPhrase = ({setQuote,setBgApp}) => {
    

    const handleButton = () => {
      const bgIndex= randomIndex(bgArray) ;
      const sentence = randomIndex(phrases) ;
    setQuote(sentence);
    setBgApp(bgIndex);
    }
  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtomPhrase