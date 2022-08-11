import React from 'react';
import { Link } from 'react-router-dom';

function OrderCard({ id, orderStatus, orderDate, price }) {
  return (
    <Link to="/customer/products">
      <section className="order_card">
        <table>
          <tbody>
            <th>
              <tr>
                <span>Pedido</span>
                <td
                  data-testid={ `customer_orders__element-order-id-${id}` }
                >
                  { id }

                </td>
              </tr>
            </th>
            <th>
              <tr>
                <td
                  data-testid={ `customer_orders__element-delivery-status-${id}` }
                >
                  {' '}
                  { orderStatus }

                </td>
              </tr>
            </th>
            <th>
              <tr>
                <td
                  data-testid={ `customer_orders__element-order-date-${id}` }
                >
                  { orderDate }

                </td>
              </tr>
              <tr>
                <td
                  data-testid={ `customer_orders__element-delivery-price-${id}` }
                >
                  {' '}
                  { price }

                </td>
              </tr>
            </th>
          </tbody>
        </table>
      </section>
    </Link>
  );
}

export default OrderCard;
