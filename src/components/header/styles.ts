import styled from "styled-components";
import Cover from '../../assets/Cover.png'

export const Container = styled.header`
    background-image: url(${Cover});
    background-size: cover;
    background-position: center;
    padding: 64px;
    z-index: 3;
`

export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 0 auto;
    width: 12.5rem;
    justify-content: center;
    align-items: center;

    img{
        width: 2.8125rem;
        height: 2.5rem;
    }
`