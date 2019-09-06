import React from 'react';
import './Card.css';

export const Card = props => (
  <div className="card">
    <img
      alt={ `avatar for ${ props.name }` }
       className="card__image"
      src={ props.avatar_url }
    />
    <h3 className="card__title">
      { props.name }
    </h3>
    <p>{ props.bio }</p>
    <a href={ props.blog }>{ props.blog }</a>
  </div>
);