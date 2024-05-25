import React from 'react'
import { useState } from 'react'
import { Person } from './Person';

export const Persons = () => {

const [Persons, setPersons]= useState([

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
    <div>
      <h2>It Team</h2>
      <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-row'>
          {Persons.map((person)=>{// cuando uso map, siempre debo usar key
               return(
               <div>
                    <Person
                    key={person.key}
                    name={person.name}
                    role={person.role}
                    img={person.img}
                    />
               </div>
               )
               })}
     </div>
     </div>
     </div>
  )
}


