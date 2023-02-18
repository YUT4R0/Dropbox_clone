import styled from 'styled-components';

export const Container = styled.div`

    --padding-top: 6.25rem;
    --padding-bottom: 7.5rem;
    --heading-font-size: 2rem;
    --content-width: 100%;

    &.blue {
        --bg-color: var(--color-primary);
        --text-color: var(--color-tertiary);
        --logo-color: var(--color-secondary);   
    }
    &.yellow {
        --bg-color: var(--color-secondary);
        --text-color: var(--color-quaternary);
        --logo-color: var(--color-primary);   
    }
    &.white {
        --bg-color: var(--color-tertiary);
        --text-color: var(--color-quaternary); 
        --logo-color: var(--color-blue);   
    }
    &.black {
        --bg-color: var(--color-quaternary);
        --text-color: var(--color-tertiary); 
        --logo-color: var(--color-blue);   
    }

    &:first-child {
        --padding-top: 8.125rem;
        --heading-font-size: 3.1875rem;

        @media (min-width: 64rem ){
            --content-width: 50%;
            --heading-font-size: 4.4375rem;
        }
    }

    background: var(--bg-color);

    position: relative;
`;

export const Content = styled.div`
    z-index: 2;

    position: relative;
    
    max-width: 90rem;
    margin: 0 auto;

    padding: var(--padding-top) 2rem var(--padding-bottom);

    h2 {
        font-size: var(--heading-font-size);
        color: var(--logo-color);
        max-width: var(--content-width);
    }

    p {
        margin-top: 1.25rem;
        font-size:  1rem;
        color: var(--text-color);
        max-width: var(--content-width);
    }
`;


