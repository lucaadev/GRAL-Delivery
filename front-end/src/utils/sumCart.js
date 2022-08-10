const sumCart = (cart) => cart
  .reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr.price)), 0);

export default sumCart;
