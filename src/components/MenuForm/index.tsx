import React from 'react';

import { Container, Navigation, Logo, Form, X, } from './styles';

const MenuForm: React.FC = () => {

  const handleToggle = () => {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu();   
    }
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <Logo />
          <span>DripBosta</span>
        </h1>

        <button onClick={handleToggle} className="action-close"><X /></button>
      </Navigation>
      
        <Form>
          <span className="title">Registre-se</span>
          <span className="subtitle">preencha seus dados abaixo</span>

          <input type='text' placeholder="Nome" />
          <input type='text' placeholder="Sobrenome" />
          <input type='email' placeholder="E-mail" />
          <input type='password' placeholder="Senha" />

          <button>Prosseguir</button>

          <span className="terms">Esta página está sujeita à Política de privacidade e aos termos de serviço.</span>
        </Form>
    </Container>
  );
}

export default MenuForm;

