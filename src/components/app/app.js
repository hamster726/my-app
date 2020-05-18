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
					like: false,
					important: true,
					id: nextId()
				},
				{
					label: 'Оно работает как обычное приложение на Windows',
					like: false,
					important: false,
					id: nextId()
				},
				{
					label: 'С этими знаниями я хочу написать свой собственный сайт - библиотеку FLAC песен',
					like: false,
					important: false,
					id: nextId()
				},
				{
					label: 'Подумываю в дипломной работе создать сайт для Питчера. Там тематика кофейная)',
					like: true ,
					important: false,
					id: nextId()
				}

			],
			term: '',
			filter: 'all'
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggle = this.onToggle.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect= this.onFilterSelect.bind(this);

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

	onToggle (id, button) {
		this.setState(({data}) =>{
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];

			let newItem;

			if (button.like){
				newItem = {...old, like: !old.like};
			} else if (button.important){
				newItem = {...old, important: !old.important};
			}


	const before = data.slice(0, index);
			const after = data.slice(index + 1);

			const newArr = [...before, newItem, ...after];

			return {
				data : newArr
			};
		})
	}

	searchPost(items, term) {
		if (term.length === 0 || term === ''){
			return items;
		}

		return items.filter((item) => {
			if (!isNaN(item)) return ;
			return (item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
		});
	}

	filterPost(items, filter) {
		if (filter === 'like'){
			return items.filter(item => item.like);
		} else return items;

	}

	onFilterSelect (filter) {
		this.setState({filter});
	}

	onUpdateSearch (term) {
		this.setState({term})
	}



	render() {

		const {data, term, filter} = this.state;

		const liked = data.filter(item => item.like).length;
		const allPosts = data.filter(item => isNaN(item)).length;

		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<StyledAppBlock>
				<AppHeader
				liked ={liked}
				allPosts = {allPosts}
				/>
				<StyledSearchPanel>
					<SearchPanel
						onUpdateSearch ={this.onUpdateSearch}
					/>
					<PostStatusFiler
						filter = {filter}
						onFilterSelect = {this.onFilterSelect}/>
				</StyledSearchPanel>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggle={this.onToggle}
				/>
				<PostAddForm
					onAdd={this.addItem}/>
			</StyledAppBlock>
		);

	}

}
