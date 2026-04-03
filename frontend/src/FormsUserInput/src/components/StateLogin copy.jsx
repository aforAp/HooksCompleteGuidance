import { useState } from 'react';

import Input from './Input.jsx';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

let emailIsInvalid, passwordIsInvalid;

  function handleSubmit(event) {
    event.preventDefault();
emailIsInvalid =  enteredValues.email.includes('@');
 passwordIsInvalid = !enteredValues.password.trim().length < 6;
    console.log(emailIsInvalid, passwordIsInvalid);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
  console.log("BLUR fired:", identifier);
  setDidEdit((prevEdit) => ({
    ...prevEdit,
    [identifier]: true,
  }));
}

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid ? "" : 'Please enter a valid email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          error={passwordIsInvalid ? "" :'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}




