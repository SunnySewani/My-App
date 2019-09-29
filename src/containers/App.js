import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/auxiliary';
import AuthContext from '../components/context/auth-context';



class App extends Component {

constructor(props){
  super(props);
  console.log('[App.js] constructor');
}



state = {
  persons: [
    {id: 'fs', name: 'Hrithik', age: 25},
    {id: 'ada', name: 'Shankar', age:27},
    {name:'dss', name: 'Sumit', age: 22}
  ],
  otherState: 'something else',
  showPersons: false,
  hideButton: true,
  changeCounter: 0,
  authenticate: false
}

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps', props);
  return state;
}

// componentWillMount(){
//   console.log('[App.js] componentWillMount');
// }
componentDidMount(){
console.log('[App.js] componentDidMount');
}


shouldComponentUpdate(nextProps, nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
 }

componentDidUpdate(){
  console.log('[App.js] did update');
  
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
  this.setState((prevState, props) => {
    return {
    persons: persons,
    changeCounter: prevState.changeCounter+1
    };
  });
}

loginHandler = () => {
  this.setState({authenticate: true});
};

toggleHandler = () =>
{
 const doesShow = this.state.showPersons;
 this.setState({showPersons: !doesShow});
}


render()


{
  console.log('[App.js] render');

let persons = null;
let buttonClass =  '';
if(this.state.showPersons){
  persons = (
            <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler}
            isAuthenticate = {this.state.authenticate}/>
  );

  buttonClass = classes.Red;


};



  return (
    <Aux>
      <button
      onClick= {() => {
        this.setState({hideButton : false});
      } }  
      >  Remove cockpit 
      </button>
      <AuthContext.Provider value = {{authenticate: this.state.authenticate, login: this.loginHandler}}>
      {this.state.hideButton ? 
    <Cockpit  
    title = {this.props.appTitle}
    showPersons ={this.state.showPersons}
    personsLength={this.state.persons.length}
    clicked={this.toggleHandler}
    
      /> : null}
      
      {persons}
      </AuthContext.Provider>
    </Aux>
  );
}
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi I\'m a react app'))
 }

export default withClass(App, classes.App);
