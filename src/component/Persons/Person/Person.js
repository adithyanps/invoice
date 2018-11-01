import React, { Component } from 'react';
class Person extends Component {
  render() {
    return (
      <div>
          <p >name:{this.props.name} </p>
          <p>{this.props.children}</p>
          <input
            label="name"
            placeholder="name"
           type="text"
           onChange={this.props.changed}
           value={this.props.name}/>
           <button onClick={this.props.clicked}>submit</button>
        </div>
    );
  }
}
export default Person;
