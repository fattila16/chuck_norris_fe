import React from 'react';
import RandomFacts from '../../components/RandomFacts/RandomFacts';
import useRandom from '../../hooks/useRandom';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
    const router = useRouter();
    const { data: randomFact, error, refresh } = useRandom(router?.query?.category);
    return (
        <>
            <RandomFacts randomFact={randomFact} error={error} refresh={refresh} />
        </>
    );
};
export default HomePage;
