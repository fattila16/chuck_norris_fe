import React from 'react';
import css from './RandomFacts.module.scss';
import Button from '../Button/Button';

interface RandomFact {
    value: string;
}
interface RandomFactsProps {
    randomFact: RandomFact | undefined;
    error?: Error;
    refresh: () => void;
}
const RandomFacts: React.FC<RandomFactsProps> = (props: RandomFactsProps) => {
    const { randomFact, error, refresh } = props;
    if (error) return <>Error</>;
    return (
        <>
            <section className={css.container}>
                <h2>{randomFact?.value}</h2>
                <div className={css.button}>
                    <Button onClick={refresh} title="Another one" size="medium" />
                </div>
            </section>
        </>
    );
};

export default RandomFacts;
