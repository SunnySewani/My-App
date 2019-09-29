import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/auxiliary';



class Person extends Component {

  componentDidMount(){
    this.inputElement.focus();
  }


 render() {
  console.log('[Person.js] Person rendering...');

  return (


    <Aux>
      <AuthContext.Consumer> 
       {context =>
         context.authenticate ? <p> Authenticated</p> : <p>Please login </p>
       } 
      </AuthContext.Consumer>
  
    <p onClick={this.props.click}>I'm {this.props.name}! and I am {this.props.age} years old</p>
    <p>{this.props.children}</p>
    <input 
    ref = {(inputEl) => {this.inputElement = inputEl}}
    type="text" onChange={this.props.changed} value = {this.props.name}/>
    </Aux>);
          } 


}

Person.propTypes ={
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person,classes.Person);
