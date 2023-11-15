import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  // The first argument is some JSX.The second argument is a reference to the HTML element (i.e added in index.html).
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
            //to stop the parent element onClick fn to be applied on child element
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')  //div added with id in index.html file
  );
};

export default Modal;
