import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import css from './SearchPage.module.scss';
import useSearch from '../../hooks/useSearch';
import { useRouter } from 'next/dist/client/router';
import Card from '../../components/Card/Card';

const SearchPage: React.FC = () => {
    const [shouldFetch, setShouldFetch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isHydrated, setIsHydrated] = useState(false);
    const router = useRouter();
    const { data, error } = useSearch(shouldFetch ? searchQuery : null);

    //https://github.com/vercel/next.js/issues/12988
    useEffect(() => {
        const { search } = router.query;
        if (search && !isHydrated) {
            setSearchQuery(search as string);
            setShouldFetch(true);
            setIsHydrated(true);
        }
    }, [router.query, isHydrated]);

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
    if (error) return <>Error</>;
    return (
        <>
            <section className={css.container}>
                <SearchBar onChange={handleChange} value={searchQuery} placeHolder="Search for a Chuck Norris Fact" />
                <div className={css.resultContainer}>
                    {data?.result.map((res: any, i: number) => (
                        <Card key={i} img={res.icon_url} fact={res.value} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SearchPage;
