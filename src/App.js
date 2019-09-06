import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { CardList } from './components/CardList';

const App = () => {
  const [ cards, setCards ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  });

  const addCard = (cardDetails) => {
    setCards(cards.concat(cardDetails));
  }

  const handleError = () => {
    setErrorMessage('username not found');
  }

  return (
    <div>
      { errorMessage && <p>{ errorMessage }</p>}
      <Form onSubmit={ addCard } onError={ handleError } />
      <CardList cards={ cards } />
    </div>
  );
}

export default App;
