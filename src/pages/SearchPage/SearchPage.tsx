import React, { useCallback, useState, ChangeEvent } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import css from './SearchPage.module.scss';
import useSearch from '../../hooks/useSearch';
import { useRouter } from 'next/dist/client/router';
import Card from '../../components/Card/Card';

const SearchPage: React.FC = () => {
    const [shouldFetch, setShouldFetch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const { data, error } = useSearch(shouldFetch ? searchQuery : null);
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            const { value } = event.target;
            setShouldFetch(false);
            setSearchQuery(value);
            if (value.length >= 3) setShouldFetch(true);
            router.push(router.route, {
                query: { ...router.query, search: value },
            });
        },
        [router],
    );
    console.log(data);
    if (error) return <>Error</>;
    return (
        <>
            <section className={css.container}>
                <SearchBar onChange={handleChange} value={searchQuery} placeHolder="Search for a Chuck Norris Fact" />
                <div className={css.resultContainer}>
                    {data?.result.map((res: any) => (
                        <Card key={res.fact} img={res.icon_url} fact={res.value} categories={res.categories} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SearchPage;
