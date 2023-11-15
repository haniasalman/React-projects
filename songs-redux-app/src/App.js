import './App.css';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList';
// import {selectSong} from './actions/action_creator' // curly braces are used for named export 

function App() {
  return (
    <div className="ui two column grid container App">
      <div className='column'>
      <SongList/>
      </div>
      <div className='column'>
      <SongDetail/>
      </div>
    </div>
  );
}

export default App;
