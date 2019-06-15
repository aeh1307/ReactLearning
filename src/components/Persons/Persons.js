import React, { PureComponent } from 'react';

import Person from './person/Person';

class Persons extends PureComponent {
//PureComponent is just a normal component that already implements
// shouldComponentUpdate with a complete props check(checks for any changes
// in the props of that component) => saves code to use PureComponent.


  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state; 
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked
  //     ){
  //     return true; 
  //   }else{
  //     return false; 
  //   }
  // //  return true; 
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate'); 
    console.log(Snapshot);
  }


  //To clean up, component is removed. 
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnMount');
  }

  render() {
    console.log('[Person.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}


export default Persons; 