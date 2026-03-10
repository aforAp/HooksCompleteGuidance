export async function fetchAvailablePlaces() {
     const response = await fetch("http://localhost:3000/places");
            const resData = await response.json();
    
            if (
              !response.ok
            ) // 200, 300 status code for true false if we get 400, 500 code{
            {
              throw new Error("Failed to fetch Places");
            }
    return resData.places;
}

export async function fetchUserPlaces() {
     const response = await fetch("http://localhost:3000/user-places");
            const resData = await response.json();
    
            if (
              !response.ok
            ) // 200, 300 status code for true false if we get 400, 500 code{
            {
              throw new Error("Failed to fetch User Places");
            }
    return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
        method: 'PUT',
        body: JSON.stringify({places}),
        //data should be in the JSON format for the backend so we are attaching this like this way
        headers: {
            'Content-Type': 'application/json'
            //this is required that the data is extracted successfully in the backend.
        }

    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Failed to update user Data');
    }

    return resData.message;
}