import React, { useState } from 'react';


const Categories = ({items, level }) =>{
    const [ activeIndex, setActiveIndex ] = useState(null);
    const [ count, setCount ] = useState(level);

    const OnTitleClicked = (id) =>{
        setActiveIndex(id);
    }
    console.log("the current level is", level);
    if(items){
        const renderedItems = items.map((item, index) =>{
            const CustomTag = `h${level}`;
            const active = item.id === activeIndex ? "active" : "";
                return <React.Fragment key={item.id}>
                    <div 
                    className={`title ${active}`}
                    onClick={()=>OnTitleClicked(item.id)}
                    >
                        <CustomTag>
                            {item.description}
                        </CustomTag>
                        <i className="dropdown icon"></i>
                    </div> 
                    {
                        item.childrens &&
                        <div className={`content ${active}`}>
                            <Categories items={item.childrens} level={level+1}></Categories>
                        </div> 
                    } 
                </React.Fragment>;
            //}        
            // else{
            //     const CustomTag = `h${level}`;
            //     return <React.Fragment key={item.id}>
            //         <CustomTag 
            //         className={`title ${active}`}
            //         onClick={()=>OnTitleClicked(item.id)}
            //         >
            //             <i className="dropdown icon"></i>
            //             {item.description}
            //         </CustomTag>
            //         {/* <CustomTag className={`content ${active}`}>
            //             <p><Categories items={item.childrens} level={level+1}></Categories></p>
            //         </CustomTag> */}
            //     </React.Fragment>;
            // };
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