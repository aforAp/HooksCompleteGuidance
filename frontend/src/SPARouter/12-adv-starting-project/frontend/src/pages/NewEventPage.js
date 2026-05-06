import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from "react-router";
const NewEventPage = () => {

  return (
    <EventForm />
  )
}

export default NewEventPage;

export async function action({request}) {
   const formData = await request.formData();
   const title = formData.get('title');
   const image = formData.get('image');
   const date = formData.get('date');
   const description = formData.get('description');

   const eventData = {
      title: title,
      image: image,
      date: date,
      description: description
   };

   const response = await fetch('http://localhost:8080/events', {
     method: 'POST',
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