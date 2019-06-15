import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';


class App extends Component {


constructor(props){
  super(props); 
  console.log('[App.js] constructor');
  //Can initialize the state in the cosntructor: with this.state =..
}

//More modern syntax to write state... autmoatically complies it to get 
//initialized in the constructor....
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 28 },
      { id: 'person2', name: 'Manu', age: 29 },
      { id: 'person3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }


  //Only old versions of react will support this=> 
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount'); 
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount'); 
  }

  shouldComponentUpdate(nexProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }



  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // Don't do this:  this.state.persons[0].name = 'Maximilian'; 
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 26 }
  //     ]
  //   })
  // }

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

    this.setState({persons: persons});
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); below more modern:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false}); 
        }}>
          Remove Cockpit
          </button>
          {this.state.showCockpit ? (
          <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} 
          /> 
          ) : null}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App' }, 'h1', 'Hi, I\'m a react App!!!');
  }

}
export default App;



//Have to use className instead of class because class is already used
// Uses jSX which isn't html bu in most cases works and, looks just like it. 