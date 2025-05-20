import React, { useState } from 'react'
import RestaurantCard from './Components/RestaurantCard';
import { nanoid } from 'nanoid';


function App() {
  
   const [restaurants, setRestaurants] = useState([
    {
      id: nanoid(),
      imageUrl: "https://www.royal-riviera.com/wp-content/uploads/2023/03/IMG_3505-scaled.jpg",
      name: "Riviera",
      cuisine: "Azərbaycan və Aralıq dənizi mətbəxi",
      rating: 5
    },
    {
      id: nanoid(),
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/17/b9/61/whole-year-terrace.jpg?w=900&h=500&s=1",
      name: "Chayki",
      cuisine: "Azərbaycan və beynəlxalq mətbəx",
      rating: 4
    },
     {
      id: nanoid(),
      imageUrl: "https://www.vapiano.fr/wp-content/uploads/ROUEN-Vapiano-Restaurant-de-pates.jpg",
      name: "Vapiano",
      cuisine: "İtalyan mətbəxi",
      rating: 3
    },
     {
      id: nanoid(),
      imageUrl: "https://cdn.frisaga.com/cache/catalog/image/place/content/Restaurant/content/abc7ddcf-901d-4be2-a638-31c689d09ece-900x500.jpg",
      name: "Sky Grill",
      cuisine: "Asiya mətbəxi",
      rating: 4
    },
     {
      id: nanoid(),
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZj6fojmUz-jDtfW3XPm4Q6YWtEJj3cfeDg&s",
      name: "Societe Baku",
      cuisine: "Avropa mətbəxi",
      rating: 3
    }
  ]);
  return (
    <div className="cards">
       {restaurants.map(item => (
        <RestaurantCard key ={item.id} {...item} />
       ))}
    </div>
  );
}

export default App;