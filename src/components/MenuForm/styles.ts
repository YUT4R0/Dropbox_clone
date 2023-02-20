import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { Wolframlanguage } from '@styled-icons/simple-icons/Wolframlanguage'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;

    @media (min-width: 64rem){
        max-width: 30rem;
    }
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 1rem;

    min-height: 3.75rem;

    > h1 {
        display: flex;
        align-items: center;

        gap: .5rem;

        > span {
            color: var(--color-quaternary);
            font-size: 1.875rem;
        }
    }

    > button {
        background: none;
        border: none;
        outline: 0;
        cursor: pointer;
    }

    @media (min-width: 64rem) {
        h1 {
            opacity: 0;
        }
    }
`

export const Logo = styled(Wolframlanguage)`
    height: 2.75rem;
    width: 2.75rem;
    fill: var(--color-blue);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    max-width: 39rem;

    padding: 0 2rem;
    margin: 0 auto;

    .title {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .subtitle {
        font-size: .75rem;
        margin-top: .25rem;
    }

    input {
        background: var(--color-tertiary);
        border: 1px solid var(--color-border);

        font-size: .875rem;

        padding: .75rem 1.125rem;
        margin-top: 1.125rem;
    }

    button {
        margin-top: 1.125rem;
        padding: .75rem 1.125rem;

        font-size: 1rem;
        background: var(--color-blue);
        color: var(--color-tertiary);

        border: none;
        outline: none;

        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            opacity: .85;
        }
    }

    .terms {
        font-size: .75rem;
        opacity: .5;
        margin-top: .25rem;
    }
`

export const X = styled(CloseOutline)`
    height: 2rem;
    width: 2rem;
    fill: gray;

    transition: fill .2s ease-in-out;

    &:hover {
        fill: var(--color-quaternary);
    }
`

