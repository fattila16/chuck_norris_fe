import React, { useCallback } from 'react';
import css from './Categories.module.scss';
import { useRouter } from 'next/dist/client/router';
import useCategories from '../../hooks/useCategories';
import Button from '../Button/Button';

const Categories: React.FC = () => {
    const { data, error } = useCategories();
    const router = useRouter();
    const handleCategoryChange = useCallback(
        (category: string) => {
            router.push(`/categories?category=${category}`, undefined, { shallow: true });
            window.scroll({ top: 0, behavior: 'smooth' });
        },
        [router],
    );
    if (error) return <>Error</>;
    return (
        <section className={css.container}>
            <h3>Categories List:</h3>
            <ul className={css.ul}>
                {data?.map((val: any) => (
                    <Button id={val} key={val} onClick={() => handleCategoryChange(val)} title={val} size="medium" />
                ))}
            </ul>
            <Button
                size="medium"
                onClick={() => {
                    router.push(router.route, { query: {} });
                    window.scroll({ top: 0, behavior: 'smooth' });
                }}
                title="Clear categories"
            />
        </section>
    );
};

export default Categories;
