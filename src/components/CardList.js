import React from 'react';
import { Card } from './Card';

export const CardList = props => props.cards.map(card => <Card key={ card.id } { ...card } />)
