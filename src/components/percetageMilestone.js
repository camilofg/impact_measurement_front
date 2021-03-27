import React, { useState, useEffect } from 'react';
import { Table, Input } from 'semantic-ui-react';

const PercentageMilestone = ({percentages}) =>{
    const [ milestones, setMilestones ] = useState(percentages);

    useEffect(() => {
        setMilestones(percentages);
    }, [percentages]);

    const handleChange = ({ itemId, val }) =>{
        console.log("item", itemId);
        console.log("current Value", val);
        var newMilestones = milestones.map(x =>{
            if(x.id === itemId)
                x.value = val;
            return x;
        });
        setMilestones(newMilestones);
    }

    const percentagesRender = milestones.map(item =>{
        console.log(item.value);
        return (<Table.Row key={item.id}>
                    <Table.Cell>
                        {item.milestone.description}
                    </Table.Cell>
                    <Table.Cell>
                    <Input
                        name={item.id.toString()}
                        value={item.value}
                        onChange={(e) => handleChange({ itemId: item.id, val: e.target.value})}
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
            <Table.HeaderCell>Porcentaje %</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
            {percentagesRender}
        </Table.Body>
    </Table>
    );
}

export default PercentageMilestone;