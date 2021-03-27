import React, { useState, useEffect } from 'react';
import { Table, Input } from 'semantic-ui-react';

const IntegerMilestone = ({integers}) =>{
    const [ milestones, setMilestones ] = useState(integers);

    useEffect(() => {
        setMilestones(integers);
    }, [integers]);

    const handleChange = ({ itemId, val }) =>{
        console.log("item", itemId);
        console.log("current Value", val);
    }


    const integersRender = milestones.map(item =>{
        console.log(item.value);
        return (<Table.Row key={item.id}>
                    <Table.Cell>
                        {item.milestone.description}
                    </Table.Cell>
                    <Table.Cell>
                    <Input
                        name={item.id.toString()}
                        value={item.value}
                        onChange={(e) => handleChange({ itemId: item.id, val: e})}
                    />
                    </Table.Cell>
            </Table.Row>
        );
    });
    return (
        <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Milestone</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
            {integersRender}
        </Table.Body>
    </Table>
    );
}

export default IntegerMilestone;