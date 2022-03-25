import React from 'react'
import './Pokecard.css'

const Pokecard = (props: any) => {
  return (
    <div className="pokecard">
        {/* add image */}
        <p>{props.name}</p>
    </div>
  )
}

export default Pokecard