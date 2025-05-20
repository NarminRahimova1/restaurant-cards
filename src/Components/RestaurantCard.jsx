import React from 'react'
import './RestaurantCard.css'
import { Rate } from 'antd';

function RestaurantCard({imageUrl, name, cuisine, rating}) {
  return (
    <div className="card">
        <img src={imageUrl} alt="" className=""/>
        <h3>{name}</h3>
        <p className="cuisine">{cuisine}</p>
        <Rate disabled defaultValue={rating} allowHalf/>
    </div>
  )
}
export default RestaurantCard;