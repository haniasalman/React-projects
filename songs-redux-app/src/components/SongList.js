import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions/action_creator'

class SongList extends Component {
  renderList() {
    // console.log(this.props)
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
        
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//passing the state to connect to be used as props in our songlist component
const mapStateToProps = state => {
  // console.log(state)
  return { songs: state.songs };
};

//the purpose of connect component is to communicate with the provider and communicate with all the data inside of reducer store.
//the first bracket is to return the fn and the second is to invoke the connect fn with the song list  
export default connect(mapStateToProps, {selectSong})(SongList);
