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
  // const teste = products.map((item) => item.price.replace(/\./, ','));
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
        { products.length !== 0 && products.map((product, i) => (
          <Card
            key={ i }
            id={ product.id }
            title={ product.name }
            price={ product.price }
            image={ product.url_image }
          />
        ))}
      </section>
      <CartBtn price={ 0 } />
    </section>
  );
}

export default Products;
