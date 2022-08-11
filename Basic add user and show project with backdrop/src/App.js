import React, { useState } from "react";
import Form from "./Components/Form";
import ShowDetails from "./Components/ShowDetails"

const DUMMY = [
  {
    id: 1,
    userN: 'Nimesh',
    age: 26
  },
  {
    id: 2,
    userN: 'Lokesh',
    age: 27
  },
  {
    id: 3,
    userN: 'Rama',
    age: 13
  }
];

function App() {

  const [CompleteData, setCompleteData] = useState(DUMMY);

  const DataHandler = (incoming)=> {
   setCompleteData((prev_data)=>{
    return [...prev_data, incoming];
   })
  }

  console.log(CompleteData);

  return (
    <React.Fragment>
      <Form sendToAPP={DataHandler}/>
      <ShowDetails dataFA={CompleteData}/>
    </React.Fragment>
  );
}

export default App;
