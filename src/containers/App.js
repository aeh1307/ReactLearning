import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 28 },
      { id: 'person2', name: 'Manu', age: 29 },
      { id: 'person3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Don't do this:  this.state.persons[0].name = 'Maximilian'; 
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative:  const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [
        { id: 'person1', name: 'Max', age: 28 },
        { id: 'person2', name: event.target.value, age: 29 },
        { id: 'person3', name: 'Stephanie', age: 26 }
      ]
    })

  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); below more modern:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }

    return (

      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App' }, 'h1', 'Hi, I\'m a react App!!!');
  };

}
export default App;



//Have to use className instead of class because class is already used
// Uses jSX which isn't html bu in most cases works and, looks just like it. 