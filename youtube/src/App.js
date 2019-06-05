import React from 'react';
import SearchBar from './SearchBar';
import youtube from './api/youtube';
import VideoList from './VideoList';
import VideoDetail from './videoDetails';

class App extends React.Component{
  state = {
    videos: [],
    selectedvideo: null
  }

  componentDidMount(){
    this.onTermSubmit('star wars 7')
  }

  onTermSubmit= async (term)=>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedvideo: video});
  };

  render(){
    console.log(this.state.videos)
    return (
      <div className="ui container">
        <h1>React with API Youtube</h1>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
