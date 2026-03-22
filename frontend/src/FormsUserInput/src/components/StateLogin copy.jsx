import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = enteredValues.email !== '' &&  !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log(enteredEmail, enteredPassword);
  }

  function handleChange(identifier, values) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: values,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleChange("email", event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter the valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleChange("password", event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
