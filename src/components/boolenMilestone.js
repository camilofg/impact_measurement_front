import React, { useState, useEffect } from 'react';
import { Table, Radio, Icon, Menu } from 'semantic-ui-react';
import api from '../api/impact_api';

const BooleanMilestone = ({booleans}) =>{
    const [ milestones, setMilestones ] = useState(booleans);
    

    useEffect(() => {
        setMilestones(booleans);
    }, [booleans])

    const handleChange = ({ itemId, val }) =>{
        api.post('/Boolean_Milestone', {
            value : val,
            milestoneId: itemId
        }).then(({data}) =>{
            console.log("the milestones are", data);
            var newMilestones = milestones.map(x =>{
                if(x.id === itemId)
                    x.value = val;
                return x;
            });
            setMilestones(newMilestones);
        }).catch(({error}) =>{
            alert(error);
        });
    }

    const booleansRender = milestones.map(item =>{
        console.log(item.value);
        return (<Table.Row key={item.id}>
                    <Table.Cell>
                        {item.milestone.description}
                    </Table.Cell>
                    <Table.Cell>
                    <Radio
                        name={item.id.toString()}
                        value='true'
                        checked={item.value === true}
                        onChange={() => handleChange({ itemId: item.id, val: true})}
                    />
                    </Table.Cell>
                    <Table.Cell>
                    <Radio
                        name={item.id.toString()}
                        value='false'
                        checked={item.value === false}
                        onChange={() => handleChange({ itemId: item.id, val: false})}
                    />
                    </Table.Cell>
            </Table.Row>
        );
    });
    //console.log("render", booleansRender);
    return (
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Milestone</Table.HeaderCell>
                <Table.HeaderCell>Yes</Table.HeaderCell>
                <Table.HeaderCell>No</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
                {booleansRender}
            </Table.Body>
            {/* <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer> */}
        </Table>
    );
}

export default BooleanMilestone;