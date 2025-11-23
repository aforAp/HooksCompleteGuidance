import {useEffect, useState} from 'react'

const State = () => {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);
    const [updatedData, setUpdatedData] = useState("");
    let nextId = 1;

     function FunctionSorting(order) {

   
        const sortedArtists = order === 'asc' ? [...artists].sort((a, b) => a.id - b.id)
        : [...artists].sort((a, b) => b.id - a.id);
        setArtists(sortedArtists);

}; 

function handleDelete(id) {
    const filteredArtists = artists.filter(artist => artist.id !== id);
    setArtists(filteredArtists);
}


  return (
    <div>
      <h1>Inspiring Sculptors:</h1>
      <input type="text" onChange={(event) => setName(event.target.value)} onKeyDown={(event) => {
            if (event.key === 'Enter') {
                setArtists([...artists, { id: Date.now(), name: name }]);
      }
      }}
        />
      {artists.map((artist, id) => (
       <div key={id}>

           <h2 key={id}>{artist.name}</h2>
           <button onClick={() => handleDelete(artist.id)}>Delete</button>
       </div>
      ))}
      <button onClick={() => FunctionSorting('asc')}>Sort ascending</button>
      <button onClick={() => FunctionSorting('desc')}>Sort Descending</button>
      {artists.map((artist, id) => (
       <div key={id}>
           <h2 key={id}>{artist.name}</h2>
           </div>))}

    </div>
  )
}

export default State;

/*Impoertant Note on Event Handlers:

   If you write the button like this:
   /*<button onClick={FunctionSorting('asc')}>Sort ascending</button>
   
   it will immediately invoke the function when the component renders, rather than waiting for a click event. This is because the parentheses () after FunctionSorting cause it to be called right away.

   To fix this, you should wrap the function call in an anonymous function, like this:
   */
