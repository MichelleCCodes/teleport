import './styles/App.css';

// components
import Team from './components/Team';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
    <Info/>
    <Team/>
    <div className="App-Banner">Coming soon to an App Store near you!</div>
    </div>
  );
}

export default App;
