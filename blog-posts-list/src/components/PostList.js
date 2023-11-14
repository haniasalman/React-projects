import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPostsAndUsers} from '../actions/action_creator'
import UserHeader from './UserHeader';

class PostList extends Component {

  componentDidMount(){
    this.props.fetchPostsAndUsers() //fetching data from the api
  }


  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <b><UserHeader userId = {post.userId}/></b>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

//passing the state to connect to be used as props in our songlist component
const mapStateToProps = state => {
  // console.log(state)
  return { posts: state.posts };
};

//the purpose of connect component is to communicate with the provider and communicate with all the data inside of reducer store.
//the first bracket is to return the fn and the second is to invoke the connect fn with the song list  
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);
