import React, { Component } from "react";
import GroceryItems from "../GroceryItems/GroceryItems";
import "./GroceryList.css";
class GroceryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
		this.addItem = this.addItem.bind(this);
		this.duplicateItemIndex = this.duplicateItemIndex.bind(this);
		this.freqMap = this.freqMap.bind(this);
		this.clearAllItems = this.clearAllItems.bind(this);
		this.togglePurchaseClass = this.togglePurchaseClass.bind(this);
	}
	freqMap(state) {
		const map = new Map();
		for (const [_, item] of Object.entries(state.items)) {
			const { text } = item;
			if (map.has(text)) {
				const freq = map.get(text);
				map.set(text, freq + 1);
			} else {
				map.set(text, 1);
			}
		}
		return map;
	}
	duplicateItemIndex(item, prevState) {
		const onlyItemsText = prevState.items.map(item => item.text);
		return onlyItemsText.indexOf(item.text);
	}
	addItem(e) {
		if (this._inputItem.value !== "") {
			const newItem = {
				text: this._inputItem.value.trim(),
				count: 1,
				key: Date.now(),
				purchased: false,
			};

			this.setState(prevState => {
				if (this.freqMap(prevState).get(newItem.text) >= 1) {
					const updatedItems = prevState.items.map(item => {
						if (item.text === newItem.text) {
							newItem.count = item.count + 1;
							newItem.key = item.key;
							return newItem;
						} else return item;
					});
					return {
						items: updatedItems,
					};
				}
				return {
					items: prevState.items.concat(newItem),
				};
			});

			this._inputItem.value = "";
		}
		e.preventDefault();
	}
	clearAllItems() {
		this.setState({
			items: [],
		});
	}
	toggle(key) {
		this.props.toggle(key);
	}
	togglePurchaseClass(key) {
		console.log("C", key);
		this.setState(prevState => {
			const updatedItems = prevState.items.map(item => {
				if (item.key === key) {
					return { ...item, purchased: !item.purchased };
				} else return item;
			});
			return {
				items: updatedItems,
			};
		});
	}
	render() {
		return (
			<div className='GroceryListMain'>
				<div className='header'>
					<form onSubmit={this.addItem}>
						<input
							ref={a => (this._inputItem = a)}
							placeholder='Enter Item'></input>
						<button type='submit'>Add</button>
					</form>
					<button type='submit' onClick={this.clearAllItems}>
						Remove All
					</button>
				</div>
				<h2 className='Heading'>Grocery List</h2>
				<GroceryItems
					entries={this.state.items}
					toggle={this.togglePurchaseClass}
				/>
			</div>
		);
	}
}

export default GroceryList;
