import React, { useState } from 'react';


const Categories = ({items, level, onMilestoneSelected }) =>{
    const [ activeIndex, setActiveIndex ] = useState(null);
    //const [ milestone, setMilestone ] = useState(null);

    const OnTitleClicked = (id) =>{
        setActiveIndex(id);
        //setMilestone(id);
        onMilestoneSelected(id);
    }

    if(items){
        const renderedItems = items.map((item, index) =>{
            const CustomTag = `h${level}`;
            const active = item.id === activeIndex ? "active" : "";
                return <React.Fragment key={item.id}>
                    <div 
                    className={`title ${active}`}
                    onClick={()=>OnTitleClicked(item.id)}
                    >
                        <CustomTag onClick={() => {onMilestoneSelected(item.id)}}>
                            {item.description}
                        </CustomTag>
                        <i className="dropdown icon"></i>
                    </div> 
                    {
                        item.childrens &&
                        <div className={`content ${active}`}>
                            <Categories items={item.childrens} level={level+1} ></Categories>
                        </div> 
                    } 
                </React.Fragment>;
        });
    
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
    }

    else{
        return (
            <div>Empty</div>
        );
    }
}

export default Categories;