import React, { useCallback } from 'react';
import RandomFacts from '../../components/RandomFacts/RandomFacts';
import Categories from '../../components/Categories/Categories';
import Button from '../../components/Button/Button';
import useCategories from '../../hooks/useCategories';
import css from './CategoriesPage.module.scss';
import useRouterQuery from '../../hooks/useRouterQuery';
import { useRouter } from 'next/router';
import useRandom from '../../hooks/useRandom';

const CategoriesPage: React.FC = () => {
    const { data: categories, error: categoriesError } = useCategories();
    const router = useRouter();
    const { data: randomFact, error: randomFactError, refresh } = useRandom(router?.query?.category);
    const [updateQuery] = useRouterQuery();
    const handleCategoryChange = useCallback(
        (category: string) => {
            updateQuery(`/categories?category=${category}`);
            window.scroll({ top: 0, behavior: 'smooth' });
        },
        [updateQuery],
    );
    return (
        <>
            <RandomFacts randomFact={randomFact} error={randomFactError} refresh={refresh} />
            <Categories categories={categories} error={categoriesError} handleCategoryChange={handleCategoryChange} />
            <Button
                className={css.button}
                size="medium"
                onClick={() => {
                    updateQuery();
                    window.scroll({ top: 0, behavior: 'smooth' });
                }}
                title="Clear categories"
            />
        </>
    );
};
export default CategoriesPage;
