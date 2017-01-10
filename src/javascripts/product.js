import React, { Component } from 'react';
import $ from 'jquery';

class Product extends Component {

    state = {
        products: []
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

    render() {

        var productRows = this.state.products.map( (product, i) => {
            return (

                <tr key={i}>
                    <td><img classname='thumbnail' src={product.mainImage.ref} alt={product.name} /></td>
                    <td>{product.name}</td>
                    <td>{product.minPrice}</td>
                </tr>
            )
        });

        return (
            <div>

                { this.state.products.length > 0 ?

                    <div id="partDetails">
                        <table>
                            <thead>
                                <tr>
                                    <td><h4 className="table-header">Image</h4></td>
                                    <td><h4 className="table-header">Item</h4></td>
                                    <td><h4 className="table-header">Price</h4></td>
                                </tr>
                            </thead>
                            <tbody>{productRows}</tbody>
                        </table>
                    </div>

                : null }

            </div>
        )
    }
}

export default Product;
