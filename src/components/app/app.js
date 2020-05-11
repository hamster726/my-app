import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFiler from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import nextId from "react-id-generator";

import styled from "styled-components";

const StyledAppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const StyledSearchPanel = styled.div`
    display: flex;
    margin: 1rem 0;
`;

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				6,
				{
					label: 'Это мое первое приложение на React',
					important: true,
					id: nextId()
				},
				{
					label: 'Оно работает как обычное приложение на Windows',
					important: false,
					id: nextId()
				},
				{
					label: 'С этими знаниями я хочу написать свой собственный сайт - библиотеку FLAC песен',
					important: false,
					id: nextId()
				}

			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);

	}

	deleteItem(id) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, ...after];

			return {
				data : newArr
			};
		});
	}

	addItem(body) {
		const newItem = {
			label : body,
			important: false,
			id: nextId()
		};

		this.setState(({data}) => {
			const newArr = [...data, newItem];

			return {
				data: newArr
			};
		});
		console.log(newItem.id);
	}

	render() {
		return (
			<StyledAppBlock>
				<AppHeader/>
				<StyledSearchPanel>
					<SearchPanel/>
					<PostStatusFiler/>
				</StyledSearchPanel>
				<PostList posts={this.state.data}
					onDelete={this.deleteItem}/>
				<PostAddForm
					onAdd={this.addItem}/>
			</StyledAppBlock>
		);

	}

}