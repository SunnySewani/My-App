import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  
  useEffect( ()=> {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('saved data o cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleaning up done');
    };

  }, [] );

  useEffect(() => {
    console.log('Cockpit.js] useEffect2');
    return () => {
      console.log('[Cockpit.js] cleaning up done useEffect2');
    };
  });

  const assignedClasses = [];
  let buttonClass=''

  if(props.showPersons){
    buttonClass = classes.Red;
}
  if(props.persons.length <= 2){
    assignedClasses.push(classes.red  );
  }
  if(props.persons.length <=1 ){
    assignedClasses.push(classes.bold);
  }


  return(
    <div className={classes.cockpit}>
    <h1>{props.title}</h1>

  <p className = {assignedClasses.join(' ')}> This is really working</p>
  <button
    className={buttonClass}
      onClick={props.clicked}> Toggle Button</button>
      </div>
  )
}

export default Cockpit;
