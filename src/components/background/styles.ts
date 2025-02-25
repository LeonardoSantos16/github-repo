import styled from "styled-components";

export const BackgroundWrapper = styled.body`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.baseBackground}
`