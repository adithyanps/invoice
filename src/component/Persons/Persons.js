import React ,{ PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
  render() {
    let d= this.props.persons.map( (person,index) => {
      return <Person
          name={person.name}
        key={person.id}
        changed={( event ) => this.props.changed( event,person.id )} />
    }   );
    return(
      <div>
      {d}
      </div>
    );
  }
}
export default Persons;
