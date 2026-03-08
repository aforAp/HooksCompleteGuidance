import {Component, useState } from "react";
import User from './User';

import classes from './Users.module.css';



class Users extends Component {  

  constructor() {
    super();
        this.state = {
      showUsers: true,
      more: 'Test'
    };
  }
  toggleUsersHandler() {
    this.setState((curState) =>{ 
      return {
        showUsers: !curState.showUsers
      }
    });
  }
  render() {
    const usersList = (
    <ul>
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

    return (
     <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {/* //the bind method is used to bind the this keyword to the toggleUsersHandler function, 
        //so that we can access the state of the component inside the function. */}
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>
    );
  }
}



export default Users;
