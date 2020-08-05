import React from 'react';
import css from './RandomFacts.module.scss';
import useRandom from '../../hooks/useRandom';
import { useRouter } from 'next/dist/client/router';
import Button from '../Button/Button';

const RandomFacts: React.FC = () => {
    const router = useRouter();
    console.log(router);
    const { data: randomFact, error, refresh } = useRandom(router?.query?.category);
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
