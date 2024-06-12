import './App.css';
import { Persons } from './components/Persons';
import { useState } from 'react';

function App() {

  const [persons, setPersons]= useState([
   //JSON
   {
    id:1,
    name:"Luis Jaimes",
    role: "Fronted Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar6.png",
},
{
    id:2,
    name:"Silvia Camacho",
    role: "Backend Developer",
    img: "https://bootdey.com/img/Content/avatar/avatar3.png",
},
{
    id:3,
    name:"Bertha Perez",
    role: "UX Designer",
    img: "https://bootdey.com/img/Content/avatar/avatar8.png",
},
]);

  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons}/>
      </div>
    </div>
  );
}

export default App;
