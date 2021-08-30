import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex: 1;
    justify-content: ${props => (props.justifyContent)};
    align-items: ${props => (props.alignItems)};
`

export const Title = styled.h1`
    color: ${props => (props.color)};
    font-size: ${props => (props.fontSize)};
    font-weight: 600
`

export const Text = styled.p`
    color: ${props => (props.color)};
`