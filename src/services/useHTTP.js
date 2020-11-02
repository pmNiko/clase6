import {useState, useEffect} from 'react';

const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';

const useGet = ({url, initialState = []}) => {
    const [data, setData] = useState(initialState);
    const [isFetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const get = async () => {
            try {
                const {data} = await axios.get(`${BASE_URL}${url}`);
                setData(data);
                setFetching(false);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }  
        get();  
    
    }, [url]);

    return [data, isFetching ,error ];
};

export default useGet;