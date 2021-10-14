//import logo from './logo.svg';
//import './App.css';
import { React, useState} from 'react';
import { data } from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <h1>Birthday Reminders</h1>
      <section className="container">
        <h2> {people.length} Birthdays today</h2>
        <List people={people}/>
      </section>
      <button className="btn" >Clear Birthdays</button>
    </main>
  );
}

export default App;
