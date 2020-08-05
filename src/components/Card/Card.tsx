import React from 'react';
import css from './Card.module.scss';

interface CardProps {
    img: string;
    fact: string;
    categories: string[];
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { img, fact, categories } = props;
    return (
        <div className={css.card}>
            <img className={css.image} src={img} alt="chuck-fact-card" />
            <ul className={css.ul}>
                <span>Categories:</span>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <div className={css.fact}>{fact}</div>
        </div>
    );
};

export default Card;
