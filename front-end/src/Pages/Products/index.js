import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Navbar';
import Card from '../../components/ProductCard';
import CartBtn from '../../components/CartBtn';
import axiosInstance from '../../utils/axiosInstance';

function Products() {
  // const navigate = useNavigate();
  localStorage.setItem('cart', JSON.stringify([]));
  // const cart = JSON.parse(localStorage.getItem('cart'));
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  // const [totalValue, setTotalValue] = useState(0);
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
      // navigate('/login');
      // localStorage.setItem('user', '');
    }
  };
  useEffect(() => getAllProducts(), []);
  return (
    <section className="main-products">
      <Header userName={ name } />
      <section className="main-products-cards">
        { products.length !== 0 && products
          .map(({ id, name: productName, price, url_Image: urlImage }, i) => {
            const priceFormat = `${price}`.replace('.', ',');
            console.log(
              priceFormat,
              { id, productName, price, urlImage },
            );
            return (
              <Card
                key={ i }
                id={ id }
                title={ productName }
                price={ priceFormat }
                url_image={ urlImage }
              />
            );
          })}
      </section>
      <CartBtn price={ 0 } />
    </section>
  );
}

export default Products;
