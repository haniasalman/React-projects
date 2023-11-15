import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedColor, onSelectColorChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        //ref.current.contains will see that the target element in our dropdown that was clicked was inside of our component
        //so it will return and our dropdown will get closed when an item is clicked
        if (ref.current.contains(event.target)) {
          // console.log(ref.current)
          return;
        }
        setOpen(false);
        
        //   document.body.addEventListener("click", onBodyClick, { capture: true });
       
        //   return () => {
        //     document.body.removeEventListener("click", onBodyClick, {
        //       capture: true,
        //     });
        //   };
        // }, []);
      },
      { capture: true }
    );
  }, []);

  const renderedResults = options.map((option) => {
    //to remove the dropdown item from the list that is currently selected and display the remianing ones
    if (option.value === selectedColor.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelectColorChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div
      className="ui selection dropdown"
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <i className="dropdown icon"></i>
      <div className="text">{selectedColor.label}</div>
      <div className={`menu ${open ? "visible transition" : ""}`}>
        {renderedResults}
      </div>
    </div>
  );
};

export default Dropdown;
