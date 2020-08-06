import { useRouter } from 'next/router';

const useRouterQuery = (): Array<any> => {
    const router = useRouter();
    const updateQuery = (query: string) => router.push(query || router.pathname, undefined, { shallow: true });
    return [updateQuery];
};
export default useRouterQuery;
