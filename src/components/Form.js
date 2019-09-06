import React, { useState } from 'react';
import axios from 'axios';

export const Form = (props) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${ username }`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername('');
      }).catch(e => {
        console.log(e);
        setUsername('');
        props.onError();
      });
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ username }
        onChange={ (event) => setUsername(event.target.value)  }
      />
      <button type="submit">Add card</button>
    </form>
  );
}
