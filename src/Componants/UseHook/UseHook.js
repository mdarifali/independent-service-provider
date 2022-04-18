import React, { useEffect, useState } from 'react';

const UseHook = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return [data, setData];
};

export default UseHook;