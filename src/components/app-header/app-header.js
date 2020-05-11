import React from "react";

import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  
  a {
  text-decoration: none;
  }
  
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'orange' : 'black'};
    :hover {
    color: black;
    }
  }
  
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = () => {
    return (
        <StyledHeader colored>
            <a href='/'><h1>Hamster726</h1></a>
            <h2>5 записей, из них понравилось 0</h2>
        </StyledHeader>
    )
}

export default AppHeader;