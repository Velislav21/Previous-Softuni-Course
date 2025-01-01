import { useState, useEffect} from "react";

const baseUrl = 'http://localhost:3030/jsonstore/games'
export default function useFetch(initialState, params) {

    const [data, setData] = useState(initialState, params);

    useEffect(() => {

        (async () => {
            const response = await fetch(baseUrl);
            const data = await response.json();
            setData(data);
        })()

    }, [])

    if(initialState.constructor == Array) {
        return Object.values(data)
    }

    return data;
}