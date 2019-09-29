import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../context/auth-context';

const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  
  
  useEffect( ()=> {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('saved data o cloud!');
    // }, 1000);
    toggleButtonRef.current.click();
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
  if(props.personsLength <= 2){
    assignedClasses.push(classes.red  );
  }
  if(props.personsLength <=1 ){
    assignedClasses.push(classes.bold);
  }


  return(
    <div className={classes.cockpit}>
    <h1>{props.title}</h1>

  <p className = {assignedClasses.join(' ')}> This is really working</p>
  <button ref = {toggleButtonRef}
    className={buttonClass}
      onClick={props.clicked}> Toggle Button</button>
      <AuthContext.Consumer>{(context) => <button onClick = {context.login}>Log in</button> }
      </AuthContext.Consumer>
      </div>
  )
}

export default React.memo(Cockpit);
