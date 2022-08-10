import React, { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Navbar';
import Card from '../../components/ProductCard';
import CartBtn from '../../components/CartBtn';
import axiosInstance from '../../utils/axiosInstance';
import cartContext from '../../utils/context';

function Products() {
  const { cartValue, setCartValue } = useContext(cartContext);
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    try {
      const { data } = await axiosInstance
        .get('/products', config);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const totalPrice = JSON.parse(localStorage.getItem('cartValue'));
    setCartValue(totalPrice);
    getAllProducts();
  }, [setCartValue]);
  return (
    <section className="main-products">
      <Header userName={ name } />
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
