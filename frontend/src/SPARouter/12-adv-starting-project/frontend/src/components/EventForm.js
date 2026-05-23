import { useNavigate, useNavigation, useActionData, useParams, redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const events = event ? event : null;
  const data = useActionData();
  const navigate = useNavigate();
 const navigation = useNavigation();
 const params = useParams();

 //get can get the info about transition and the form submissions
 const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {Object.values(data.errors).map(err => <li key={err}>
            {err}
        </li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={events ? events.title: ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={events ? events.image: ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={events ? events.date: ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={events ? events.description: ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSubmitting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting....': 'Save'}</button>
      </div>
    </Form>
  );
}


export async function action({request, params}) {
   const formData = await request.formData();
   const title = formData.get('title');
   const image = formData.get('image');
   const date = formData.get('date');
   const description = formData.get('description');
   const method = request.method;
   console.log(method);

   const eventData = {
      title: title,
      image: image,
      date: date,
      description: description
   };
let url = 'http://localhost:8080/events';
if (method === 'PATCH') {
  const eventId = params.eventId;
  url = 'http://localhost:8080/events/'+ eventId;
}

   const response = await fetch(url, {
     method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),
   });

   if (response.status === 422) {
     return response;
   }

    if(!response.ok) {
      throw new Response(JSON.stringify({message: 'Could not save event.'}), {status: 500});
    }


    return redirect('/events');
}
export default EventForm;
