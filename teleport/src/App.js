import './styles/App.css';

// components
import Home from './components/Home';
import Info from './components/Info';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
    <Home/>
    <Info/>
    <Team/>
    <div className="App-Banner">Coming soon to an App Store near you!</div>
    </div>
  );
}

export default App;
