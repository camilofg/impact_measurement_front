import React, { useState, useEffect } from 'react';
import Categories from './components/categories';
import Booleans from './components/boolenMilestone';
import Percentages from './components/percetageMilestone';
import Integers from './components/integerMilestone';
import api from './api/impact_api';
import { Grid } from 'semantic-ui-react';

export default () =>{
    const [ items, setItems ] = useState([]);
    const [ milestone, setMilestone ] = useState(null);
    const [ milestonesList, setMilestoneList ] = useState([]); 

    useEffect(()=>{
        const search = async () => {
            const { data } = await api.get('/Category');
            setItems(data);
        };
        if(items.length === 0){
            search();
        };
        console.log("milestone in app", milestone);
    }, [milestone]);

    const self = {
        onMilestoneSelected : (milestoneId) => {
            //console.log("the milestone in App is", milestoneId);
            setMilestone(milestoneId);
            
            api.get('/Milestone/GetByCategory', {
                    params:{
                        categoryId : milestoneId
                    }
                }).then(({data}) =>{
                    if(data.length > 0){
                        console.log("the milestones are", data);
                        setMilestoneList(data);
                    }
                });
        }
    }

    return (
            <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column><Categories items={items} level={3} root={self}/></Grid.Column>
                <Grid.Column>
                {
                    milestonesList.filter(x => { return x.milestone.dataType === 4}).length > 0 &&
                    <Booleans booleans={milestonesList.filter(x => { return x.milestone.dataType === 4})}/>
                }
                {
                    milestonesList.filter(x => { return x.milestone.dataType === 0}).length > 0 &&
                    <Integers integers={milestonesList.filter(x => { return x.milestone.dataType === 0})}/>
                }
                {              
                    milestonesList.filter(x => { return x.milestone.dataType === 1}).length > 0 &&
                    <Percentages percentages={milestonesList.filter(x => { return x.milestone.dataType === 1})}/>
                }
                </Grid.Column>
                </Grid.Row>
            </Grid>
        );
};