import React from 'react';

import { HeadWrapper, Head, Logo, } from './styles';

const Header: React.FC = () => {

  const buttonVariant = Math.round(Math.random()) 

  return (
    <HeadWrapper>
        <Head>
            <h1>
              <Logo />
              <span>DripBosta</span>
            </h1>

            <button>{buttonVariant === 1 ? 'Interact' : 'Associate'}</button>
        </Head>
  </HeadWrapper>
  );
}

export default Header;