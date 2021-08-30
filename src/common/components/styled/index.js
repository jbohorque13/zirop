import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex: 1;
    padding: ${props => (props.paddingVertical ? props.paddingHorizontal : '0px')} ${props => (props.paddingHorizontal ? props.paddingHorizontal : '0px')};
    flex-direction:  ${props => (props.flexDirection)};
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