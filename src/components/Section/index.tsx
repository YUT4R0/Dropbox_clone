import React from 'react';
import { Container, Content } from './styles';
import Header from '../Header';

interface Props {
  variant: 'blue' | 'yellow' | 'white' | 'black'
  title: string
  description: string
}

const Section: React.FC<Props> = ({ variant, description, title }) => {
  return (
    <Container className={variant}>

      <Header />

      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

export default Section;
