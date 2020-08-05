import axios, { CancelTokenSource } from 'axios';

const cancelableAxios = () => {
    let token: CancelTokenSource;

    return async (url: string) => {
        if (token) token.cancel();
        token = axios.CancelToken.source();
        try {
            const response = await axios.get(url, { cancelToken: token.token });
            return response.data;
        } catch (error) {
            if (axios.isCancel(error)) console.log('Request cancelled');
            else console.log(error);
        }
    };
};

export default cancelableAxios();
