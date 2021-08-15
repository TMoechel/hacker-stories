import './App.css';

const person = {
  firstName: "John",
  lastName: "Miller",
  age: 27
}

function App() {
  return (
    <div>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.age}</p>
    </div>
    );
}

export default App;
