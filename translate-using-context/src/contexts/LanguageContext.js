import React from 'react';

//The purpose of this separate file is to create a context object and export it into only
//the component files that we care about in our application.
//Here We only want to connect this context object to our app component and the button and the field.

export default React.createContext('english');
