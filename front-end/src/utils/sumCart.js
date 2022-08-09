const sumCart = (cart, initialCart) => cart
  .reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr.price)), initialCart);

export default sumCart;
