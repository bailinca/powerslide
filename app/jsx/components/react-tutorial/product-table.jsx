import React from 'react';
import CategoryRow from './category-row';
import ProductRow from './product-row';

const ProductTable = ({products, filterText, inStockOnly}) => {

	let rows = [];
	let lastCategory = null;

	products.map((product) => {
		if (product.name.indexOf(filterText) === -1 ||
			(!product.stocked && inStockOnly)) {

			return;
		}

		if (product.category !== lastCategory) {
			rows.push(<CategoryRow category={product.category} key={product.category}/>);
		}
		rows.push(<ProductRow product={product} key={product.name}/>);
		lastCategory = product.category;
	});

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

ProductTable.propTypes = {
	filterText: React.PropTypes.string.isRequired,
	inStockOnly: React.PropTypes.bool.isRequired,
	products: React.PropTypes.array.isRequired
};

export default ProductTable;
