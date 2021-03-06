import React from 'react';
import css from './Card.module.scss';

interface CardProps {
    img: string;
    fact: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { img, fact } = props;
    return (
        <div className={css.card}>
            <img className={css.image} src={img} alt="chuck-fact-card" />
            <div className={css.fact}>{fact}</div>
        </div>
    );
};

export default Card;
