  export async function fetchEvents() {
      const response = await fetch('http://localhost:3000/events');
console.log(response);
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();
      console.log('The fucking events are:');
console.log(events);
      return events;
    };

