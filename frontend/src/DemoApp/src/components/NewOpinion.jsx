import { useState, use } from "react";
import { useFormStatus } from "react-dom";
import { OpinionsContext } from "../store/opinions-context";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  const enteredValues = {
    title: "",
    body: "",
    userName: "",
  };

  const [formStates, setFormState] = useState({
    enteredValues,
    errors: null,
    pending: false,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    const UserDatas = { title, body, userName };
    setFormState((prevState) => ({ ...prevState, enteredValues: UserDatas }));
    let errors = [];

    if (title.trim().length < 5) {
      errors.push("Title must be at least five characters long.");
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion must be between 10 and 300 characters long.");
    }

    if (!userName.trim()) {
      errors.push("Please provide your name.");
    }

    if (errors.length > 0) {
      setFormState((prevState) => ({ ...prevState, errors: errors }));

      return;
    }

    // submit to backend
    console.log(formStates.enteredValues);
    setFormState((prevState) => ({ ...prevState, pending: true }));
    await addOpinion(UserDatas);
     setFormState((prevState) => ({ ...prevState, pending: false }));
    return { errors: null };
  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form onSubmit={handleSubmit}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formStates.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formStates.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formStates.enteredValues?.body}
          ></textarea>
        </p>

        {formStates.errors && (
          <ul className="errors">
            {formStates.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      <button className="btn-primary" type="submit" disabled={formStates.pending}>
            {formStates.pending ? "Submitting..." : "Submit"}
          </button>
      </form>
    </div>
  );
}
