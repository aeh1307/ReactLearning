import React from 'react'; 


//NB withClass with lowercase to make clear it is not 
// a functional component but a normal function. 

//...props automaticaly spreads the properties in property-value pairs.
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
    );
};

export default withClass; 