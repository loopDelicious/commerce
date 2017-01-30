import React, { Component } from 'react';
import $ from 'jquery';
import Cart from './cart.js';

class Product extends Component {

    state = {
        products: [],
        cart: []
    };

    componentDidMount = () => {
        $.ajax({
            url: 'https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
            type: 'get',
            contentType: 'application/json',
            success: (response) => {

                var resObj = JSON.parse(response);

                this.setState({
                    products: resObj.products
                });
            }
        })
    };

    handleAdd = (item, event) => {
        event.preventDefault();
        console.log(item);
        this.setState({
            cart: item
        });
        console.log(this.state.cart);
    };

    handleRemove = (item) => {

    };

    render() {

        var productRows = this.state.products.map( (product, i) => {
            return (

                <tr key={i}>
                    <td><img src={product.mainImage.ref} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td className="price">{(product.minPrice /= 100).toLocaleString("en-US")}</td>
                    <td><button onClick={this.handleAdd.bind(null, product)} >Buy</button></td>
                </tr>
            )
        });

        return (
            <div id="wrapper">

                { this.state.products.length > 0 ?

                    <div>
                        <div id="partDetails cf">
                            <table id="product-list">
                                <thead>
                                    <tr>
                                        <td><h4 className="table-header">Image</h4></td>
                                        <td><h4 className="table-header">Item</h4></td>
                                        <td><h4 className="table-header">Price</h4></td>
                                        <td> </td>
                                    </tr>
                                </thead>
                                <tbody>{productRows}</tbody>
                            </table>
                        </div>
                        <Cart
                            delete={this.handleRemove}
                            cart={this.state.cart}
                        />
                    </div>

                : null }

            </div>
        )
    }
}

export default Product;
