import { QueryClient } from "@tanstack/react-query";

  export const queryClient = new QueryClient();

  export async function fetchEvents({signal, searchTerm, max}) {
    console.log(searchTerm);
    let url = 'http://localhost:3000/events';

    if(searchTerm && max) {
      url += '?search=' + searchTerm + '&max=' + max;
    }
    else if (searchTerm) {
      url += '?search=' + searchTerm;
    }  else if ( max ){
      url += '?max=' + max;
    }
      const response = await fetch(url, { signal: signal });
console.log(response);
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();
console.log(events);
      return events;
    };


    export async function createEvent(eventData) {
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }); 

      if(!response.ok) {
        const error = new Error('An error occurred while creating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const newEvent = await response.json();
      return newEvent;
    };


    export async function fetchSelectableImages({signal}) {
     const response = await fetch('http://localhost:3000/events/images', { signal: signal });

     if(!response.ok) {
      const error = new Error('An error occurred while fetching the images');
      error.code = response.status;
      error.info = await response.json();
      throw error;
     }
     const {images} = await response.json();
     return images;
    }


    export async function fetchEvent({id, signal}) {
      const response = await fetch(`http://localhost:3000/events/${id}`, { signal: signal });

      if(!response.ok) {
        const error = new Error('An error occurred while fetching the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }
      console.log("the response is");

      const event = await response.json();
         console.log(event.event);
      return event.event;
    }

    export async function deleteEvent({id}) {
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
      });

      if(!response.ok) {
        const error = new Error('An error occurred while deleting the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

    }

    export async function updateEvent({id, event}) {
      console.log("the event is");
      console.log(event);
      const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify(event),
      });

      if(!response.ok) {
        const error = new Error('An error occured while updating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }
    }