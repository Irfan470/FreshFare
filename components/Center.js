import styled from "styled-components";

const StyledDiv = styled.div`
max-width: 900px;
margin: 0 90px;
display: flex;
flex-direction: column;
align-items: center;
`;


export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
}
