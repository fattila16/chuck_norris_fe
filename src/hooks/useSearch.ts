import useSWR from 'swr';
import cancallableAxios from '../utils/cancallableAxios';

const baseURL = 'https://api.chucknorris.io';

const fetcher = async (url: string) => {
    return cancallableAxios(url);
};

const useSearch = (query: string | null): any => {
    let url: string | null = `${baseURL}/jokes/search?query=${query}`;
    if (!query) url = null;
    const { data, error } = useSWR(url, fetcher);
    return { data, error };
};

export default useSearch;
