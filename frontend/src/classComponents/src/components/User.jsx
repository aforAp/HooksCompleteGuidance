import {Component} from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log("user will unmount");
  }
 render() {
   return <li className={classes.user}>{this.props.name}</li>
 }
}
//render method doesnt receive props as an argument, instead we can access props via this.props
//extends Component in the class method which helps us to work class as components.
//with the help of Component we can access props with the help of this.props

export default User;
