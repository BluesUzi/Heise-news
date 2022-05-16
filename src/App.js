import './App.css';
import ShowPosts from './news';
import ShowWeather from './weather';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="header">
          <h3>Willkommen!</h3>
          <p>
            Aktuelle Neuigkeiten für Dich:
          </p>
        </div>
        <div className='weather-container'>
          <ShowWeather></ShowWeather>
        </div>
      </div>
      <div className='posts-container'>
        <ShowPosts></ShowPosts>
      </div>
    </div>
  );
}

export default App;
