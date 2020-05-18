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
    color: ${props => props.colored ? 'black' : 'blue'};
    :hover {
    color: orange;
    }
  }
  
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {


	let countWord;

	if (allPosts >= 10 && allPosts <= 20) {
		countWord = 'записей';
	} else {
		debugger
		switch (allPosts % 10) {
		case (1) :
			countWord = 'запись';
			break;
		case 2 :
		case 3 :
		case 4 :
			countWord = 'записи';
			break;
		default :
			debugger
			countWord = 'записей';
			break;
		}
	}


	return (
		<StyledHeader colored>
			<a href='/'><h1>Hamster726</h1></a>
			<h2>{allPosts} {countWord}, из них понравилось {liked}</h2>
		</StyledHeader>
	)
}


export default AppHeader;
