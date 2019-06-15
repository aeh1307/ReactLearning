import React, { useEffect } from 'react';

import classes from './Cockpit.css';


// A functional component => cannot use react lifecycle hooks. 
// However we can use antoher hook fromr react called useEffect.
//useEffect combiens the fuctionality or the usecase you cna cover of 
//all these class based life cycle hooks in one react  hook. 


//ComponentDidMount and ComponentDidUpdate combiend in one effect: 
const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...faked:
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

//If you just want ComponentDidMount, you can use useEffect with an empty array
//as second argument.

  //If you have different effects than depends on different data,
  // you can have as many useEffect setups as you want. 
  //useEffect(); 

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }


  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red);  // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
        </button>
    </div>
  );

};


export default cockpit; 