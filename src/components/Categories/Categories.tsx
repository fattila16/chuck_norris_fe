import React from 'react';
import css from './Categories.module.scss';
import Button from '../Button/Button';

interface CategoriesProps {
    categories: string[];
    handleCategoryChange: (category: string) => void;
    error?: Error;
}
const Categories: React.FC<CategoriesProps> = (props: CategoriesProps) => {
    const { categories, error, handleCategoryChange } = props;
    if (error) return <>Error</>;
    return (
        <section className={css.container}>
            <h3>Categories List:</h3>
            <ul className={css.ul}>
                {categories?.map((val: any) => (
                    <Button
                        id={val}
                        key={val}
                        onClick={() => {
                            handleCategoryChange(val);
                        }}
                        title={val}
                        size="medium"
                    />
                ))}
            </ul>
        </section>
    );
};

export default Categories;
