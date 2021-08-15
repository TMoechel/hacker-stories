import logo from './logo.svg';
import './App.css';

function greetLion(name) {
  return `Hello ${name}` 
}

function App() {
  return (
    <div>
    <h1>{greetLion("Mike")}</h1>
    </div>
    );
}

export default App;
