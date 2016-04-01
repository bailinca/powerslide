import React from 'react';
import ProductTable from './product-table';
import SearchBar from './search-bar';

class FilterableProductTable extends React.Component {

	constructor() {
		super();

		this.handleUserInput = this.handleUserInput.bind(this);

		this.state = {
			filterText: '',
			inStockOnly: false
		};
	}

	handleUserInput(filterText, inStockOnly) {
		this.setState({filterText, inStockOnly});
	}

	render() {

		const products = [
			{
				category: 'Sporting Goods',
				price: '$49.99',
				stocked: true,
				name: 'Football'
			}, {
				category: 'Sporting Goods',
				price: '$9.99',
				stocked: true,
				name: 'Baseball'
			}, {
				category: 'Sporting Goods',
				price: '$29.99',
				stocked: false,
				name: 'Basketball'
			}, {
				category: 'Electronics',
				price: '$99.99',
				stocked: true,
				name: 'iPod Touch'
			}, {
				category: 'Electronics',
				price: '$399.99',
				stocked: false,
				name: 'iPhone 5'
			}, {
				category: 'Electronics',
				price: '$199.99',
				stocked: true,
				name: 'Nexus 7'
			}
		];

		return (
			<div>
				<SearchBar
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}
					onUserInput={this.handleUserInput}/>

				<ProductTable
					products={products}
					filterText={this.state.filterText}
					inStockOnly={this.state.inStockOnly}/>
			</div>
		);
	}

}

export default FilterableProductTable;
