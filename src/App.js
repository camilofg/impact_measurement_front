import React, { useState, useEffect } from 'react';
import Categories from './components/categories';
import api from './api/impact_api';

export default () =>{
    const [ items, setItems ] = useState([]);

    useEffect(()=>{
        const search = async () => {
            const { data } = await api.get('/Category');
            // const { data } = await axios.get('https://localhost:44328/api/Category', {
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //     }
            // });
            setItems(data);
        };
        if(items.length === 0){
            search();
        }
    });
    return (
            <div>
                <Categories items={items} level={3} />
            </div>
        );
};