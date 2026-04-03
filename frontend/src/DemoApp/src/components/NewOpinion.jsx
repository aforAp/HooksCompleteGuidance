import { useState, useContext} from "react";
import { OpinionsContext } from "../store/opinions-context.jsx";

export function NewOpinion() {
  const {addOpinion} = useContext(OpinionsContext);
 const [errors, setErrors] = useState(null);
  const [enteredValues, setEnteredValues] = useState({
    userName: "",
    title: "",
    body: "",
  });


  async function shareOpinionAction(event) {
      event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get('userName');
    const title = formData.get('title');
        const body = formData.get('body');

        let errors = [];

        if(title.trim().length < 5 ) {
          errors.push('Title must be at least 5 characters long');
        }
        
        if(body.trim().length < 10 || body.trim().length > 500) {
          errors.push('Opinion must be between 10 and 500 characters long');
        }

        if(!userName.trim()) {
          errors.push('You must enter your name');
        }
        
        if(errors.length > 0) {
         setErrors(errors);
      setEnteredValues({ userName, title, body });
      return;
        }

        //submit to backend
        await addOpinion({ userName, title, body });
       setErrors(null);
        setEnteredValues({
          userName: "",
          title: "",
          body: ""
        });
      }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form onSubmit={shareOpinionAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={enteredValues?.body}></textarea>
        </p>
 {errors && (
          <ul className="errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
