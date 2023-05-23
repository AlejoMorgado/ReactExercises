import React, { useState, useEffect } from 'react';
import sneakers2 from '../../tools/sneakers2';
import '../../styles/MoreSneakersCard.css';

const MoreSneakersCard = () => {
  const [currentSneakers, setCurrentSneakers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSneakers = () => {
      const nextIndex = (currentIndex + 3) % sneakers2.length;
      setCurrentSneakers(sneakers2.slice(nextIndex, nextIndex + 3));
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(updateSneakers, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className='moreSneakersContainer'>
      {currentSneakers.map((sneaker, index) => (
        <div className='sneakerRotation' key={index}>
          <h2>{sneaker.sneakerName}</h2>
          <p>{sneaker.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MoreSneakersCard;
