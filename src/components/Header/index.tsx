import React from 'react';

import { HeadWrapper, Head, Logo, } from './styles';

const Header: React.FC = () => {

  const buttonVariant = Math.round(Math.random()) 

  const handleToggle = () => {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu();   
    }
  }

  return (
    <HeadWrapper>
        <Head>
            <h1>
              <Logo />
              <span>DripBosta</span>
            </h1>

            <button onClick={handleToggle} >{buttonVariant === 1 ? 'Interact' : 'Associate'}</button>
        </Head>
  </HeadWrapper>
  );
}

export default Header;