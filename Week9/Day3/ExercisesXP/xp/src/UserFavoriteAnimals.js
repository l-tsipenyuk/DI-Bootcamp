import React from 'react';

export default function UserFavoriteAnimals(props) {
    const { animals } = props;
    return animals.map((animal, index) => <li key={index}>{animal}</li>)
};