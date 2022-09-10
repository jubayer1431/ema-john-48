import React from "react";
import './_Product.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// export default function Product({product: {name, img, seller, price, ratings}, handleAddToCart}) {
export default function Product({product, handleAddToCart}) {
  const {name, img, seller, price, ratings} = product;

  return (<div className="product">
    <img src={img} alt={name}/>
    <div className="product_info">
      <p className="product_name">{name}</p>
      <p>Price: ${price}</p>
      <p><small>{seller}</small></p>
      <p><small>{ratings}</small></p>
    </div>
    <button className={'btn_cart'} onClick={() => {
      handleAddToCart(product)
    }
    }><p>Add to Cart</p>
    <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  </div>)
} 