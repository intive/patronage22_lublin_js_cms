import { OrderDetail, Product, OrderDetailRow } from "../../types/table";

const getOrderDetailRows = (
  orderDetails: OrderDetail[],
  products: Product[],
  currentOrderId: string,
): OrderDetailRow[] => {
  let orderDetailRows: Array<OrderDetailRow> = [];

  const currentOrderDetails = orderDetails.filter(
    (e) => e.orderId.toString() === currentOrderId,
  );

  const currentProducts = products.filter((product) =>
    currentOrderDetails.map((e) => e.productId).includes(product.id),
  );

  for (let index = 0; index < currentOrderDetails.length; index++) {
    orderDetailRows.push({
      id: index + 1,
      name: currentProducts[index].title,
      unitCost: currentProducts[index].price,
      quantity: currentOrderDetails[index].quantity,
      totalPrice:
        currentOrderDetails[index].quantity * currentProducts[index].price,
    });
  }

  return orderDetailRows;
};

export { getOrderDetailRows };
