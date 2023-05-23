import React, { useState } from 'react';
import sneakers from '../../tools/sneakers';
import Nike from './Nike';
import Adidas from './Adidas';
import Asics from './Asics';
import NewBalance from './NewBalance';
import Vans from './Vans';
import HideButton from '../Buttons/HideButton';
import ReviewButton from '../Buttons/ReviewButton';
import Review from '../Review';
import RemoveReviewButonn from '../Buttons/RemoveReviewButonn';
import Footer from '../Footer/Footer';
import SearchButton from '../Buttons/SearchButton';
import Filter from '../Filter/Filter';
import HideSearchButton from '../Buttons/HideSearchButton';
import MoreSneakers from '../Footer/MoreSneakers';
import '../../styles/SneakerContainer.css'

const SneakerContainer = ({ content, cart, setCart }) => {
  const [displayReview, setDisplayReview] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);

  const showReview = () => {
    setDisplayReview(true);
  };

  const hideReview = () => {
    setDisplayReview(false);
  };

  const showSearchBar = () => {
    setDisplaySearchBar(true);
  }
  const hideSearchBar = () => {
    setDisplaySearchBar(false);
  }
  const addToCart = (sneaker) => {
    setCart([...cart, sneaker]);
  };
  
  return (
    <div className='contentContainer'>
      <SearchButton onButtonClick={showSearchBar} />
      {displaySearchBar ? (
        <div>
          <Filter sneakers={sneakers} />
          <HideSearchButton onButtonClick={hideSearchBar} />
        </div>
      ) : (
        <div className='sneakerContainer'>
          {sneakers.map((sneaker, index) => {
            if (index === 0) {
              return (
                <Nike
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                  onAddToCart={() => addToCart(sneaker)}
                />
              );
            } else if (index === 1) {
              return (
                <Adidas
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                  onAddToCart={() => addToCart(sneaker)}
                />
              );
            } else if (index === 2) {
              return (
                <Asics
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                  onAddToCart={() => addToCart(sneaker)}
                />
              );
            } else if (index === 3) {
              return (
                <NewBalance
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                  onAddToCart={() => addToCart(sneaker)}
                />
              );
            } else if (index === 4) {
              return (
                <Vans
                  sneakerName={sneaker.sneakerName}
                  price={sneaker.price}
                  key={index}
                  onAddToCart={() => addToCart(sneaker)}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )
      }
      <HideButton onButtonClick={content} content="Hide sneakers" />
      <ReviewButton onButtonClick={showReview} content="Check the reviews" />
      {displayReview && (
        <div>
          <Review content="These reviews were made by experts" />
          <RemoveReviewButonn onButtonClick={hideReview} content="Hide review" />
        </div>
      )}
      <MoreSneakers />
      <Footer />
    </div>
  );
}

export default SneakerContainer;