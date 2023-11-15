import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm'
import _ from 'lodash'

const StreamEdit = (props) => {
  const {id } = useParams();

  // console.log(props)
  const { fetchStream, editStream } = props;
    useEffect(() => {
      fetchStream(id);
    }, [fetchStream, id]);
  
    const onSubmit = formValues =>{
      editStream(id, formValues)
    }
    // console.log(props.streams[id])
    // console.log(onSubmit())
  return (
  <div>
    <h3>Edit a Stream</h3>
    {/* pick fn is used to just change the values of keys that we needed and not the entire object */}
    <StreamForm initialValues={_.pick(props.streams[id], 'title', 'description')} 
    onSubmit={onSubmit}/>
  </div>);
}



const mapStateToProps = (state) => {
  // console.log(ownProps)
  // console.log(state.streams)
  return {
    streams: state.streams
    // streams: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);


