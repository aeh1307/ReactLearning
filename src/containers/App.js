import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from '../errorBoundary/ErrorBoundary'; 


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
        this.setState( {
         persons: [
         {name: newName, age: 28},
         {name: 'Manu', age: 29},
         {name: 'Stephanie', age: 26} 
       ]
      } )
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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.Red);  // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (

      <div className={classes.App}>
        <h1>Hi, I'm a react App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={() => this.togglePersonHandler('Maximillian')}>Toggle Persons</button>
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App' }, 'h1', 'Hi, I\'m a react App!!!');
  };

}
export default App;



//Have to use className instead of class because class is already used
// Uses jSX which isn't html bu in most cases works and, looks just like it. 