import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';


class App extends Component {
state = {
  persons: [
    {id: 'fs', name: 'Hrithik', age: 25},
    {id: 'ada', name: 'Shankar', age:27},
    {name:'dss', name: 'Sumit', age: 22}
  ],
  otherState: 'something else',
  showPersons: false
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons : persons});

}

changeNameHandler = (event, id) => {
  // console.log('Was clicked')
  // this.state.persons[0].name = 'Sewani';
  const personIndex = this.state.persons.findIndex(p => {return p.id === id;});
  const person = { ...this.state.persons[personIndex] };
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person;
  this.setState({
    persons: persons
  });
}

toggleHandler = () =>
{
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow});
}


render()


{

let persons = null;
let buttonClass =  '';
if(this.state.showPersons){
  persons =
            <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}/>
             ;

  buttonClass = classes.Red;


};



  return (
    <div className={classes.App}>
    <Cockpit showPersons ={this.state.showPersons}
    persons={this.state.persons}
    clicked={this.toggleHandler}
    />
      {persons}

    </div>
  );
}
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi I\'m a react app'))
 }

export default App;
