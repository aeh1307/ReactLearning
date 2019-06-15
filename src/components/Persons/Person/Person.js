import React, { Component} from 'react';
import PropTypes from 'prop-types'; 

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';

class Person extends Component {
constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
}


componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus(); 
}

    render() {
        console.log('[Person.js] rendering ...');
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}  => older apporach
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>


        );
    }
}

//Proptypes making restriction of which datatypes that can be passed.
// Beneficial when working with other developers so they get a message when trying to
//use the component you've made in a wrong way. 
Person.propTypes = {
click: PropTypes.func,
name: PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func
};


export default withClass(Person, classes.person);