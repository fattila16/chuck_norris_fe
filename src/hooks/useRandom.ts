import useSWR, { mutate } from 'swr';
import axios from 'axios';

const baseURL = 'https://api.chucknorris.io';

const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

const useRandom = (category: string | null | undefined | string[]): any => {
    let url: string | null = `${baseURL}/jokes/random?category=${category}`;
    if (!category) url = `${baseURL}/jokes/random`;
    const { data, error } = useSWR(url, fetcher);
    return { data, error, refresh: () => mutate(url) };
};

export default useRandom;
