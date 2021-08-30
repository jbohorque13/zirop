import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex: 1;
    justify-content: ${props => (props.alignItems)};
    align-items: ${props => (props.alignItems)};
`