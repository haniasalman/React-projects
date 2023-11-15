import React from "react";
import youtube from "./apis/youtube";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = {
    videos: [],
    videoSelect: null,
  };

  componentDidMount(){
    this.onSearchSubmit('buildings');
  }

  onSearchSubmit = async (term) => {
    //axios.get(url[, config])
    const response = await youtube.get("/search", {
      params: {
        //params` are the URL parameters to be sent with the requested url
        q: term,
      },
    });

    // console.log(response);
    this.setState({ videos: response.data.items ,
    videoSelect: response.data.items[0]});
  };

  //callback method that is passed as prop to the videolist and videolist passed it to the videoitem component
  //so that when user click on that videoitem it invokes this callback method
  onVideoSelect = (video) => {
    // console.log("from app: " ,video)
    this.setState({ videoSelect: video });
  };

  render() {
    return (
      <div className="App">
  
        <SearchBar onTermSubmit={this.onSearchSubmit} className="search"/>
     
        <div className="ui grid">
          <div className="row">
            <div className="ten wide column">
              <VideoDetail video={this.state.videoSelect} />
            </div>

            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
