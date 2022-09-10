import React , { useEffect ,useState } from 'react';
import Product from '../Product/Product';
import './_Shop.scss';

export default function Shop() {

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    // Fetching data and set state;
    const fetchedData = async ()=>{
      const response = await fetch('products.json');
      const data = await response.json(); 
      setProducts(data)
    };

    fetchedData();

  },[]);

  // processing whole product object so that we have all property for cart calculation
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  }
  console.log(cart);
  return (<div className="shop-container">
    <div className="products-container">
      {
        products.map(item=><Product key={item.id} product={item} handleAddToCart={handleAddToCart} />)
      }
    </div>
    <div className="cart-container">{cart.length}</div>
  </div>);
}