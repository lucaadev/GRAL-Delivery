import React, { useEffect, useState } from 'react';
import Header from '../../components/Navbar';
import Card from '../../components/ProductCard';
import CartBtn from '../../components/CartBtn';
import axiosInstance from '../../utils/axiosInstance';

function Products() {
  localStorage.setItem('cart', JSON.stringify([]));
  const { name } = JSON.parse(localStorage.getItem('user'));
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const { data } = await axiosInstance.get('/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getAllProducts(), []);
  console.log(products);
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
      <CartBtn price={ 10 } />
    </section>
  );
}

export default Products;
