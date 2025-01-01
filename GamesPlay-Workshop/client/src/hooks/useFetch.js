import { useState, useEffect } from "react";
import { requester, get } from "../api/requester";

export default function useFetch(method, url, initialData, body) {

    const [data, setData] = useState(initialData);
    useEffect(() => {

        (async () => { 
            const data = await requester(method, url)
            setData(data)
        })()


        // (async () => {
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     setData(data);
        // })()

    }, [])

    return { data };
}