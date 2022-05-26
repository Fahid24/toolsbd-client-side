import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = ' https://quiet-mesa-88785.herokuapp.com/tools';

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setTools(data)
            })
    }, [tools])
    return [tools]
}

export default useTools;
