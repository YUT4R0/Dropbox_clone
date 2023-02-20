import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 4;
    
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: white;

    @media (min-width: 64rem) {
        width: calc(100% / 3);
        box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.175);
    }

    @media (min-width: 90rem) {
        width: calc(30rem + ((100vw - 90rem) / 2));
    }

    transform: translateX(100%);

    transition: transform 0.5s cubic-bezier(.5, 0, 0, 1);

    &.open {
     transform: translateX(0)   
    }

    @media (min-width: 64rem) {
 
        &.openByScroll {
            transform: translateX(0);
        }

        &.openByScroll .action-close {
            display: none;
        }
    }
`;
