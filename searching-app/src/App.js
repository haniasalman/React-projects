import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import unsplash from './api/unsplash'
import ImageList from './components/ImageList';

class App extends React.Component {

  state ={
    images: []
  }
  onSearchSubmit = async term => {
    //axios.get(url[, config])
    const response = await unsplash.get('/search/photos', {
      params: { //params` are the URL parameters to be sent with the requested url
        query: term
      },

     
    })
    
    this.setState({images: response.data.results})
}

  render() {
    return (
      <div className="App">
      <SearchBar onSubmit = {this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>
    );
  }
}


export default App;