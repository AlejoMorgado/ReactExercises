import './styles/App.css';
import image from './components/images/red.png'
import sneakers from './tools/sneakers';
import Tittle from './components/Tittle';
import Subtitle from './components/SubTitle';
import ShowButton from './components/Buttons/ShowButton';
import Nike from './components/Sneakers/Nike';
import Adidas from './components/Sneakers/Adidas';
import Asics from './components/Sneakers/Asics';
import NewBalance from './components/Sneakers/NewBalance';
import Vans from './components/Sneakers/Vans';
import HideButton from './components/Buttons/HideButton';
import ReviewButton from './components/Buttons/ReviewButton';
import React, { useState } from 'react';
import Review from './components/Review';
import RemoveReviewButonn from './components/Buttons/RemoveReviewButonn';
import Footer from './components/Footer/Footer';
import LoginButton from './components/login/LoginButton';
import LoginForm from './components/login/LoginForm';
import HideLoginButonn from './components/login/HideLoginButton';



const App = () => {
  const [showSneakers, setShowSneakers] = useState(false);
  const [displayReview, setDisplayReview] = useState(false);
  const [showLogin, setLogin] = useState(false);

  const dropCatalog = () => {
    setShowSneakers(true);
  };

  const hideCatalog = () => {
    setShowSneakers(false);
  };

  const showReview = () => {
    setDisplayReview(true);
  };

  const hideReview = () => {
    setDisplayReview(false);
  };

  const displayLogin = () => {
    setLogin(true);
  };

  const hideLogin = () => {
    setLogin(false)
  }

  return (
    <div className="App">
      {showLogin ? (
        <div>
        <HideLoginButonn onButtonClick={hideLogin}/>
        <LoginForm />
        </div>
      ) : (
        <div>
        <LoginButton onButtonClick={displayLogin}/>
          <div className='header'>
            <div className='titleCotainer'>
              <Tittle text="Find your style here" color="black" />
              <Subtitle content="Check the latest and trending products!" color="green" />
            </div>
            <img className='headerImage' src={image} alt="Header" />
          </div>
          <ShowButton onButtonClick={dropCatalog} sneakers={sneakers} />
          {showSneakers && (
            <div className='sneakerContainer'>
              {sneakers.map((sneaker, index) => {
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
              })}
              <HideButton onButtonClick={hideCatalog} content="Hide sneakers" />
              <ReviewButton onButtonClick={showReview} content="Check the reviews" />
              {displayReview && (
                <div>
                  <Review content="This reviews were made by experts" />
                  <RemoveReviewButonn onButtonClick={hideReview} content="Hide review" />
                </div>
              )}
              <Footer />
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default App;
