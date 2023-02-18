import styled from 'styled-components';
import { Wolframlanguage } from '@styled-icons/simple-icons/Wolframlanguage'

export const HeadWrapper = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    clip: rect(auto, auto, auto, auto);
`;

export const Head = styled.header`
    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    z-index: 3;

    background: var(--bg-color);

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 90rem;

    margin: 0 auto;
    padding: 1rem 2rem;

    h1 {
        display: flex;
        gap: .75rem;
        align-items: center;

        span {
            color: var(--text-color);
            font-size: 1.875ren;
         
            cursor: pointer;
            transition: all .1s ease-in-out;

            &:hover {
                filter: brightness(.7);
            }
        }
    }

    button {
        color: var(--text-color);

        background: none;
        border: none;
        outline: none;

        font-size: 1rem;

        cursor: pointer;
        transition: all .1s ease-in-out;

        &:hover,
        &:focus {
            filter: brightness(.7);
            text-decoration: underline;
        }
    }
`

export const Logo = styled(Wolframlanguage)`
    height: 2.75rem;
    width: 2.75rem;
    fill: var(--logo-color);

    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        filter: invert(1);
    }
`

