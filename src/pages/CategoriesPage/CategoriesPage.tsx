import React from 'react';
import RandomFacts from '../../components/RandomFacts/RandomFacts';
import Categories from '../../components/Categories/Categories';

const CategoriesPage: React.FC = () => {
    return (
        <>
            <RandomFacts />
            <Categories />
        </>
    );
};
export default CategoriesPage;
