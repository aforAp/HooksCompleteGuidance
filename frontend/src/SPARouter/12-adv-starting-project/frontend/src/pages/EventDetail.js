import React from 'react'
import EventItem from '../components/EventItem';
import { useLoaderData } from 'react-router';
const EventDetail = () => {

    const data = useLoaderData();
   
  return (
    <EventItem event={data.event} />
  )
}

export default EventDetail;


export async function loader({request, params}){
    const id = params.eventId;
    //getting the event data for the specific eventId,.
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if(!response.ok) {
        throw new Response(JSON.stringify({message: 'Could not fetch details for selected event.'}), {status: 500});
    }
    else {
    return response;
    }
    
}
