import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStream } from '../../actions';
import flv from 'flv.js'

const StreamShow = (props) => {
  const {id } = useParams();

  const videoRef = React.createRef();

  const { fetchStream } = props;
    useEffect(() => {
      fetchStream(id);
    }, [fetchStream, id]);
  
    const renderContent = () => {
      if(!props.streams[id]){
        return 'Loading...'
      }      
    }
    const {title, description} = props.streams[id]

  return (
  <div>
    <video ref={videoRef} style={{width: '70%'}} controls/>
    {renderContent()}
    <h1>{title}</h1>
    <h3>{description}</h3>
    
  </div>);
}



const mapStateToProps = (state) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps,{fetchStream})(StreamShow);
