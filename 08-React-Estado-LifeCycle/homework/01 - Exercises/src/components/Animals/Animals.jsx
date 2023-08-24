import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    const propiedades = props
    super();
  }

  render() {
    return <div>
      console.log(props)
      {propiedades.map(animal => {
        return <div>
              <h5>{animal}</h5>
              <img src={animal.imagen} alt={animal.name} />
        </div> 
      })}
    </div>
  }
}
