import {useRef, useState} from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Model.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from './assets/logo.png';

function App() {
    const modal = useRef();
    const selectedPlace = useRef();
    const [pickedPlaces, setPickedPlaces] = useState([]);

   function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
   }

   function handleStopRemovePlace() {
    modal.current.close();
   }

   function handle
}