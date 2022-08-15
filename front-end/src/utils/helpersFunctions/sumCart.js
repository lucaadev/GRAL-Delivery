const sumCart = (cart) => cart
  .reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr.floatPrice)), 0);

export default sumCart;
