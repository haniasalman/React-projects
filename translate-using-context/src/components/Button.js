import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  
  //We get the default value out of that context object by setting up the contextType property to link 
  //our component to the context object. 
  static contextType = LanguageContext;

  render() {
      // we got reference to the actual data inside the context object with this.context.
    const text = this.context === 'english' ? 'Submit': 'Voorleggan';
    return <button className="ui button primary">{text}</button>;
  }
}

//another method to link the LangCont obj
// Button.contextType = LanguageContext

export default Button;
