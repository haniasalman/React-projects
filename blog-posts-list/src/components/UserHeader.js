import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {

  render() {

    const {user} = this.props
    if(!user){
        return 123;
    }
      
    return <div className="ui relaxed divided list">{user.name}</div>;
  }
}

//own props object is a copy, or a reference to the props that are about to be sent into componentDidMount fn.
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return { user: state.users.find(user => user.id === ownProps.userId )};
};

 
export default connect(mapStateToProps)(UserHeader);
