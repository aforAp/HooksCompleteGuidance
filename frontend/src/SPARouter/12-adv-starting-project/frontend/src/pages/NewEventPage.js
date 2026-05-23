import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from "react-router";
const NewEventPage = () => {

  return (
    <EventForm method="post" />
  )
}

export default NewEventPage;

