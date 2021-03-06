import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    } else if (total > 50) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 12.50;
    }

    const tax = (total * 0.10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formateNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p><small>Tax + VAT:</small> {tax}</p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;