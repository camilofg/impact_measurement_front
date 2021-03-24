import React, { useState, useEffect } from 'react';
import Categories from './components/categories';
import api from './api/impact_api';

export default () =>{
    const [ items, setItems ] = useState([]);
    const [ milestone, setMilestone ] = useState(null);

    useEffect(()=>{
        const search = async () => {
            const { data } = await api.get('/Category');
            setItems(data);
        };
        if(items.length === 0){
            search();
        }
    }, [milestone]);

    const onMilestoneSelected = (milestoneId) => {
        console.log("the milestone is", milestoneId);
        setMilestone(milestoneId);
    }

    return (
            <div>
                <Categories items={items} level={3} onMilestoneSelected={onMilestoneSelected}/>
            </div>
        );
};