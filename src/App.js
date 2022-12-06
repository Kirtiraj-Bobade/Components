import './App.css';
import Greeting from './Class';

function App() {
  function formatUser(name)
  {
    return name.firstName + ' '  + name.lastName + ' ' + name.id;

  }

  const name ={
    firstName : 'Kirtiraj',
    lastName : 'Bobade',
    id : 12
  }
  return (
    <div className="App">
      <h1>hello, {formatUser(name)}</h1>
      <Greeting />
    </div>
  );
}

export default App;
