import React, {useEffect} from 'react';
import Modal from '../Modal';
import {history} from '../../history';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

const StreamDelete = (props) => {
  const {id } = useParams();

  console.log(id)

  const { fetchStream,deleteStream } = props;
  useEffect(() => {
    fetchStream(id);
  }, [fetchStream,id]);

  const actions = (
//it is an element that allows us to return multiple elements or assign multiple jsx elements to a single variable.
// But when it gets rendered onto the screen, it doesn't actually produce any HTML.
    <React.Fragment>
      <button onClick={()=> deleteStream(id)} className="ui button negative">Delete</button>
      <Link to='/' className="ui button">Cancel</Link>
    </React.Fragment>
  );
  // console.log(props.streams[id].title)

  const renderContent = () => {
    if(!props.streams[id]){
      return 'Are you sure you want to delete this stream'
    }
    return `Are you sure you want to delete this stream: >> ${props.streams[id].title}`
    
  }


  return (
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => history.push('/')}
      />
  );
  
};


const mapStateToProps = (state) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps,{fetchStream, deleteStream})(StreamDelete);

