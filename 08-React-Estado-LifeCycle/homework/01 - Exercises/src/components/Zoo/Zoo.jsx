import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";

import styledZoo from "./Zoo.module.css";

const Zoo = ()=> {
  /* Escribe acá tu código */
  const [zoo ,setZoo] = React.useState ({
    zooName:"",
    animals:[],
    species:[],
    allAnimals:[]
  })
  
  const handleInputChange = (evento) => {
      setZoo({...zoo,zooName:evento.target.value});
    };

    const handleSpecies = (evento) =>{}

    const handleAllSpecies = () =>{}

      React.useEffect(fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
         setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
         })
      )
      .catch((error) => console.log(error)))

  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species species= {zoo.species} handleSpecies={handleSpecies(props)} handleAllSpecies={handleAllSpecies(props)} />
      <Animals animals={zoo.animals} />
    </div>
  );

  }
export default Zoo