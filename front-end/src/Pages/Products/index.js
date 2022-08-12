import React, { useCallback, useContext, useEffect, useState } from 'react';
import CartBtn from '../../components/CartBtn';
import Header from '../../components/NavBar';
import Card from '../../components/ProductCard';
import axiosInstance from '../../utils/axios/axiosInstance';
import DeliveryContext from '../../utils/context/DeliveryContext';
// import { readStorage } from '../../utils/helpersFunctions/localStorage';

function Products() {
  const { cartValue, setCartValue, user } = useContext(DeliveryContext);
  console.log(user);
  const [products, setProducts] = useState([]);
  // const user = readStorage('user', {});

  const fetchApiAllProducts = useCallback(async () => {
    const config = { headers: { Authorization: user.token } };
    const { data } = await axiosInstance.get('/products', config);
    setProducts([...data]);
  }, [user.token]);

  useEffect(() => {
    fetchApiAllProducts();
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
