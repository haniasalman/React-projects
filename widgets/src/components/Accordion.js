import React, { useState } from "react";

const Accordion = ({ items }) => {
  //array destructuring is used to set values that are in useState array instead of assigning the values seperately
  //activeIndex is the key that is a ref to some value that will be changed over time
  //setActiveIndex is a function that is used to update the state
  //null is the initialized value of ativeIndex
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index); //setter fnction
    // console.log('Title clicked', index);
  };

  const renderedItems = items.map((item, index) => {
    //adding class 'active' when we click on the particular item to expand it
    const active = index === activeIndex ? "active" : " ";

    return (
      // React.Fragment is used to wrap all the jsx in on tag without using any builtin div or anyother tag
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
