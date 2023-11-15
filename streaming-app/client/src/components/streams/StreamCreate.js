import React from 'react';
import { connect } from 'react-redux';
import {createStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {
 
    onSubmit = formValues => {
    // console.log(formValues);
    this.props.createStream(formValues)
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}



//To make our form component communicate with the store, we need to wrap it with reduxForm(). 
//It will provide the props about the form state and function to handle the submit process.
export default connect(null, {createStream})(StreamCreate)