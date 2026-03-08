import {useState, useEffect} from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
const [availblePlaces, setAvailablePlaces] = useState([]);
//fetch function which was provided by the browser
useEffect(() => {
fetch('http://localhost:3000/places').then((response) => {
  return response.json();
 }).then((resData) => {
setAvailablePlaces(resData.places);
//places which was defined in the backend.
 });
}, []);
 

  return (
    <Places
      title="Available Places"
      places={availblePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
