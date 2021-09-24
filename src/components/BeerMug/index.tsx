import React from 'react'
import './styles.css'

const BeerMug: React.VFC = () => {
  return (
    <div className="BeerMug__container">
      <div className="BeerMug__mug ">
        <div className="BeerMug__beer"></div>
      </div>
      <div style={{ position: 'absolute' }} className="inset-0">
        <div className="BeerMug__bubble"></div>
        <div className="BeerMug__small-bubbles"></div>
        <div className="BeerMug__drip"></div>
      </div>
    </div>
  )
}

export default BeerMug
