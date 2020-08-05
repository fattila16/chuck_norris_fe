import useSWR, { mutate } from 'swr';
import axios from 'axios';

const baseURL = 'https://api.chucknorris.io';

const fetcher = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
};

const useCategories = (): any => {
    const url = `${baseURL}/jokes/categories`;
    const { data, error } = useSWR(url, fetcher);
    return { data, error, refresh: () => mutate(url) };
};

export default useCategories;
