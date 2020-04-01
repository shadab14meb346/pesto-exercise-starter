import React, { Component } from "react";
import "./GroceryItems.css";
class GroceryItems extends Component {
	constructor(props) {
		super();
		this.createItems = this.createItems.bind(this);
	}
	createItems(item) {
		const { text, key, count, purchased } = item;

		return (
			<li
				onClick={() => this.props.toggle(key)}
				key={key}
				className={purchased ? "purchased" : ""}>
				{text}
				{count !== 1 ? <span className='count'>({count})</span> : <span></span>}
			</li>
		);
	}
	render() {
		const GroceryItems = this.props.entries;
		const listItems = GroceryItems.map(this.createItems);

		return <ol className='theList'>{listItems}</ol>;
	}
}

export default GroceryItems;
