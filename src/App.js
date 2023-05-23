import React, { useState } from 'react';
import './styles/App.css';
import ShowButton from './components/Buttons/ShowButton';
import LoginButton from './components/Login/LoginButton';
import LoginForm from './components/Login/LoginForm';
import HideLoginButton from './components/Login/HideLoginButton';
import SneakerContainer from './components/Sneakers/SneakerContainer';
import ButtonShoppingCart from './components/ShoppinCart/ButtonShoppingCart';
import Cart from './components/ShoppinCart/Cart';
import Header from './components/Header';

const App = () => {
  const [showSneakers, setShowSneakers] = useState(false);
  const [showLogin, setLogin] = useState(false);
  const [showCart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const dropCatalog = () => {
    setShowSneakers(true);
  };

  const hideCatalog = () => {
    setShowSneakers(false);
  };

  const displayLogin = () => {
    setLogin(true);
  };

  const hideLogin = () => {
    setLogin(false);
  };

  const displayCart = () => {
    setCart(true);
  };

  const hideCart = () => {
    setCart(false);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      {showLogin ? (
        <div className='loginContainer'>
          <HideLoginButton onButtonClick={hideLogin} />
          <LoginForm />
        </div>
      ) : (
        <div className='whitoutname1'>
          {showCart ? (
            <div>
              <Cart cart={cartItems} hideCart={hideCart} emptyCart={emptyCart} />
            </div>
          ) : (
            <div className='withoutname2'>
              <div className='menu'>
                <ButtonShoppingCart onButtonClick={displayCart} content="ShoppingCart" />
                <LoginButton onButtonClick={displayLogin} />
              </div>
              <Header />
              <ShowButton onButtonClick={dropCatalog} />
              {showSneakers && (
                <SneakerContainer cart={cartItems} setCart={setCartItems} content={hideCatalog} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default App;
