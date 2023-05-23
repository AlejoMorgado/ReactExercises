import React, { useState } from 'react';
import sneakers from '../../tools/sneakers';
import Nike from '../Sneakers/Nike';
import Adidas from '../Sneakers/Adidas';
import Asics from '../Sneakers/Asics';
import NewBalance from '../Sneakers/NewBalance';
import Vans from '../Sneakers/Vans';
import '../../styles/FilterBar.css'
const FilterBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredSneakers = sneakers.filter((sneaker) =>
    sneaker.sneakerName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='filterContainer'>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search sneakers..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {searchTerm && (
          filteredSneakers.map((sneaker, index) => {
            if (index === 0) {
              return (
                <Nike
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                />
              );
            } else if (index === 1) {
              return (
                <Adidas
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                />
              );
            } else if (index === 2) {
              return (
                <Asics
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                />
              );
            } else if (index === 3) {
              return (
                <NewBalance
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                />
              );
            } else if (index === 4) {
              return (
                <Vans
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })
      )}
    </div>
  );
};
export default FilterBar;