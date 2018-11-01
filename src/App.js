import date from './date.js';

import Persons from './component/Persons/Persons';
import Person from './component/Persons/Person/Person';

import sample from './date';
import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      {name:"",age:28}


  ],other:'sd'
  }
  //
  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}.this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [ ...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons:persons} );

  }
  switchNameHandler = () => {
    this.setState({
      persons:[
        {name:"adithyan",age:88}
      ]
    })
  }
  render () {
    return(
      <div>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        clicked={ this.switchNameHandler }
        changed={this.nameChangedHandler}/>

    </div>

    );
  }
  }


export default App;
