import { useState } from 'react'

function TheGuestFinder() {

  //Task 1: Define a Mock List: Create an array of at least 3 objects inside your component. Each object should have an id, name, and roomNumber.
    const seaEagleGuestList = () => {
      const guests =  [
        {id: 1, name: 'Alice', roomNumber: 1},
        {id: 2, name: 'Jhon', roomNumber: 25},
        {id: 3, name: 'Elaija', roomNumber: 15},
    ]
  }

//Task 2: State Initialization: Create a useState hook. The state should be an object containing a key for the search query (e.g., query: '').


//Task 3: Child Component: Create a functional component named GuestCard that accepts name and room as props and displays them in a simple div.

/*
The Problems to Solve (The Logic)

1. The Handshake (Event Handling): Create a handleChange function. It must destructure name and value from the event and update your object state using the Spread Operator and Computed Property Names ([name]: value).

2. The Logic Filter: Before the return statement, create a variable that takes your mock list and uses the .filter() method. It should only return guests whose names include the text currently stored in your state.

3. The Controlled Input: In your JSX, write an <input> tag.
-Set the name attribute to match your state key exactly.
-Link the value attribute to the state.
-Connect the onChange attribute to your handler.

4. The Data Loop: Use .map() to loop through your filtered list and render a <GuestCard /> for every match. Ensure you pass the data down via props and include a unique key.

5. The "Empty" State: Use a conditional (ternary or &&) to show a message saying "No guests found" if the filtered list is empty.
*/


  return (
    <div>
      
    </div>
  )
}

export default TheGuestFinder;
