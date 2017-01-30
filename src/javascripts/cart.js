import React, { Component } from 'react';

class Cart extends Component {

    state = {
        total: 0,
        discount: false
    };

    discount = 25;

    handleRemove = (item) => {
        this.props.delete(item);
        this.calcTotal();
    };

    handleDiscountToggle = () => {
        this.setState({
            discount: !this.state.discount
        });
        this.calcTotal();
    };

    calcTotal = () => {
        var tempTotal = 0;
        this.props.cart.forEach( (item, i) => {
            tempTotal += item.price;
        });

        if (this.state.discount) {
            tempTotal *= (1-this.discount/100);
        }

        this.setState({
            total: tempTotal
        });
    };

    render() {

        var cartRows = this.props.cart.map( (item) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><a onClick={this.handleRemove}>Remove</a></td>
                </tr>
            )
        });

        return (
            <div className="cart">

                { this.state.total > 0 ?

                    <div>
                        <thead>
                            <tr>
                                <td>Item</td>
                                <td>Price</td>
                                <td> </td>
                            </tr>
                        </thead>
                        <tbody>{cartRows}</tbody>
                    </div>

                    : <h3>Buy something.</h3>
                }

                {/*<input type="checkbox"*/}
                       {/*onChange={this.handleDiscountToggle}*/}
                       {/*className={item.selected ? 'selected' : 'deselected'}*/}
                {/*/>*/}
                <span>Total: ${this.state.total}</span>
            </div>
        )
    }
}

export default Cart;
