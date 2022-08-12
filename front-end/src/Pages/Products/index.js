import React, { useCallback, useContext, useEffect, useState } from 'react';
import CartBtn from '../../components/CartBtn';
import Header from '../../components/NavBar';
import Card from '../../components/ProductCard';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';

function Products() {
  const { cartValue, setCartValue, setCart } = useContext(DeliveryContext);
  const [products, setProducts] = useState([]);

  const fetchApiAllProducts = useCallback(async (user, cart) => {
    const config = { headers: { Authorization: user.token } };
    const { data } = await axiosInstance.get('/products', config);
    setProducts([...data]);
    setCart(cart);
  }, [setCart]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    fetchApiAllProducts(user, cart);
  }, [fetchApiAllProducts]);

  useEffect(() => {
    const totalPrice = JSON.parse(localStorage.getItem('cartValue'));
    setCartValue(totalPrice);
  }, [setCartValue]);

  return (
    <section className="main-products">
      <Header />
      <section className="main-products-cards">
        { products.length !== 0 && products
          .map(({ id, name: productName, price, url_image: urlImage }, i) => {
            const priceFormat = `${price}`.replace('.', ',');
            return (
              <Card
                key={ i }
                id={ id }
                title={ productName }
                price={ priceFormat }
                floatPrice={ price }
                image={ urlImage }
              />
            );
          })}
      </section>
      <CartBtn price={ cartValue || 0.00 } />
    </section>
  );
}

export default Products;
