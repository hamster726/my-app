import React from "react";

import styled from "styled-components";
import {ListGroup, ListGroupItem} from 'reactstrap';
import PostListItem from "../post-list-item";


const StyledListGroup = styled(ListGroup)`
    margin-top: 50px;
`;

const StyledListGroupItem = styled(ListGroupItem)`
  padding: 20px 35px 10px 35px;
  margin-top: 10px;
`;





const PostList = ({posts, onDelete, onToggle}) => {

	const elements = posts.map((item) => {
		if (!isNaN(item)) return null;

		const {id, ...itemProps} = item;

		return (
			<StyledListGroupItem key={id} >
				<PostListItem
					{
						...itemProps}
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggle(id, {important: true})}
					onToggleLiked={() => onToggle(id, {like: true})}
				/>
			</StyledListGroupItem>
		);
	});

	return (
		<StyledListGroup>
			{elements}
		</StyledListGroup>
	);
};

export default PostList;
