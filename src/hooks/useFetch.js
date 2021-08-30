import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [datos, setdatos] = useState({data: null, error: null, loading: true})

    useEffect(() => {
        setdatos({data: null, error: null, loading: true})
        
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(data => {
                setdatos({
                    data,
                    error: null,
                    loading: false
                })
            })
    }, [url])

    return datos
}
