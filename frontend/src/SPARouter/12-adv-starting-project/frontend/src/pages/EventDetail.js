import React from 'react'
import {useParams} from 'react-router-dom';
const EventDetail = () => {
    const params = useParams();
  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
    </div>
  )
}

export default EventDetail
