import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex: 1;
    padding: ${props => (props.paddingVertical ? props.paddingVertical : '0px')} ${props => (props.paddingHorizontal ? props.paddingHorizontal : '0px')};
    flex-direction:  ${props => (props.flexDirection)};
    justify-content: ${props => (props.justifyContent)};
    align-items: ${props => (props.alignItems)};
    background-color: ${props => (props.backgroundColor)};
`

export const Line = styled.div`
    display: flex;
    flex: 1;
    position: absolute;
    height: ${props => (props.height ? props.height : `50%`)};
    left: 0;
    top: ${props => (props.top)};
    width: 4px;
    background-color: ${props => (props.backgroundColor) ? (props.backgroundColor) : `#000`};
`
export const Row = styled.div`
    display: flex;
    display: 1;
    position: ${props => (props.position) ? (props.position) : `inherit`};
    height: 100%;
    padding: ${props => (props.paddingVertical ? props.paddingVertical : '0px')} ${props => (props.paddingHorizontal ? props.paddingHorizontal : '0px')};
    flex-direction:  ${props => (props.flexDirection)};
    justify-content: ${props => (props.justifyContent) ? (props.justifyContent) : `center`};
    align-self: ${props => (props.alignSelf ? props.alignSelf : 'flex-start')};
    background-color: ${props => (props.backgroundColor) ? (props.backgroundColor) : `center`};
    align-items: stretch;
`

export const Title = styled.h1`
    color: ${props => (props.color)};
    font-size: ${props => (props.fontSize)};
    font-weight: ${props => (props.fontWeight)}
`

export const Text = styled.p`
    color: ${props => (props.color)};
    font-size: ${props => (props.fontSize)};
`

export const Button = styled.button`
    display: flex;
    width: ${props => (props.width)};
    height: ${props => (props.height)};
    justify-content: ${props => (props.justifyContent)};
    align-items: ${props => (props.alignItems)};
    background-color: ${props => (props.backgroundColor)};
    border-radius: ${props => (props.borderRadius)};
    border-color: ${props => (props.borderColor)};
    border-width: ${props => (props.borderWidth)};
`
export const List = styled.ul`
    display: ${props => props.display};
    flex: ${props => props.flex};
    position: ${props => props.position};
    left: 0;
    right: 0;
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    z-index: ${props => props.zIndex};
`

export const ItemList = styled.li`
    display: ${props => props.display};
    flex: ${props => props.flex};
    justify-content: ${props => (props.justifyContent)};
    align-items: ${props => (props.alignItems)};
`   