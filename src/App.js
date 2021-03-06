//import logo from './logo.svg';
//import './App.css';
import { React, useState} from 'react';
import { data } from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data); 
  // Reset Function - setPeople(data) - populates data array 
  const reset = () => {
    setPeople(data);
  };
  return (
    <main>
      <section className="container">
        <h3> {people.length} Birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button> 
        <button onClick={reset}>Show All</button>
      </section>
      
    </main>
  );
};

export default App;
