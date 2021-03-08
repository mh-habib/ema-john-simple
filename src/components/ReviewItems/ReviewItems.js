import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemsStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '5px',
        paddingBottom: '15px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemsStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p> 
            <button 
            onClick={()=>props.removeProduct(key)}
            className="main-button"
            >Remove</button>
        </div>
    );
};

export default ReviewItems;