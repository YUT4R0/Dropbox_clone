import React, { useEffect, useState }from 'react';
import { Container } from './styles';

interface Props {
  children: React.ReactNode
}

declare global {
  interface Window {
    toggleActiveMenu: ( () => void ) | undefined
  }
}

const SideMenu: React.FC<Props> = ({ children }) => {
  const [scroll_Y, setScroll_Y] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const scrollThreshold = 300

  useEffect(() => {
    const onScroll = () => {
      setScroll_Y(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const classes = [
    isActive ? 'open' : '',
    scroll_Y <= scrollThreshold ? 'openByScroll' : '',
  ]

  const className = classes.join('  ').trim()

  const toggleActiveMenu = () => {
    setIsActive(boolean => !boolean)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

export default SideMenu;
