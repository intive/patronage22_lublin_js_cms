import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  OrderDetail,
  Product,
  PaymentStatus,
  OrderObject,
} from "../types/table";
import { getProducts } from "../components/lib/products";
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardContent, Typography } from "@mui/material";
import CustomerDataCard from "../components/OrderDataCard";

type UrlParams = {
  id: string;
};

type OrderDetailRow = {
  id: number;
  name: string;
  unitCost: number;
  quantity: number;
  totalPrice: number;
};

const mockOrders = [
  {
    id: "1",
    userName: "Adam",
    userSurname: "Nowak",
    totalPrice: 0,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.DONE,
  },
  {
    id: "2",
    userName: "Marek",
    userSurname: "Kowalski",
    totalPrice: 0,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.REJECTED,
  },
  {
    id: "3",
    userName: "Arkadiusz",
    userSurname: "Nowak",
    totalPrice: 0,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.CANCELLED,
  },
];

//Every mockedOrderDetails data, juz for exercising purposes, in future, fetched from API
const mockedOrderDetails = [
  { id: 1, orderId: 2, productId: 101, quantity: 3 },
  { id: 2, orderId: 1, productId: 245, quantity: 8 },
  { id: 3, orderId: 2, productId: 102, quantity: 4 },
  { id: 4, orderId: 3, productId: 184, quantity: 7 },
  { id: 5, orderId: 2, productId: 103, quantity: 1 },
  { id: 6, orderId: 1, productId: 102, quantity: 11 },
  { id: 7, orderId: 3, productId: 102, quantity: 2 },
  { id: 12, orderId: 3, productId: 99, quantity: 2 },
];
//The same as above

const setOrderDetailRows = (
  orderDetails: OrderDetail[],
  products: Product[],
  currentOrderId: string
): OrderDetailRow[] => {
  let orderDetailRows: Array<OrderDetailRow> = [];

  const currentOrderDetails = orderDetails.filter(
    (e) => e.orderId.toString() === currentOrderId
  );

  const currentProducts = products.filter((product) =>
    currentOrderDetails.map((e) => e.productId).includes(product.id)
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

const OrderDetails: React.FC = () => {
  // const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  // const [apiOrders, setApiOrders] = useState<OrderObject[]>([]);
  const [apiProducts, setApiProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams<UrlParams>();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setApiProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) return <div>Loading ...</div>;

  const detailRows = setOrderDetailRows(mockedOrderDetails, apiProducts, id);
  const currentOrder = mockOrders.find((e) => e.id === id) as OrderObject;
  const totalPrice = detailRows
    .map((e) => e.totalPrice)
    .reduce((partialSum, e) => partialSum + e, 0);

  return (
    <>
      <Card>
        <CustomerDataCard
          id={id}
          userName={currentOrder.userName}
          userSurname={currentOrder.userSurname}
          totalPrice={currentOrder.totalPrice}
          orderDate={currentOrder.orderDate}
          paymentStatus={currentOrder.paymentStatus}
        />
      </Card>
      <DataGrid
        sx={{
          ".light-blue--header": {
            backgroundColor: "rgba(116,182,247,0.4)",
          },
        }}
        autoHeight
        disableSelectionOnClick
        disableColumnMenu
        columns={[
          {
            field: "id",
            headerName: "#",
            sortable: false,
            flex: 1,
            headerClassName: "light-blue--header",
            align: "center",
            headerAlign: "center",
          },
          {
            field: "name",
            headerName: "PRODUCT NAME",
            sortable: false,
            flex: 3,
            headerClassName: "light-blue--header",
            align: "center",
            headerAlign: "center",
          },
          {
            field: "unitCost",
            headerName: "UNIT COST",
            sortable: false,
            flex: 1,
            headerClassName: "light-blue--header",
            align: "center",
            headerAlign: "center",
          },
          {
            field: "quantity",
            headerName: "QUANTITY",
            sortable: false,
            flex: 1,
            headerClassName: "light-blue--header",
            align: "center",
            headerAlign: "center",
          },
          {
            field: "totalPrice",
            headerName: "PRICE",
            sortable: false,
            flex: 1,
            headerClassName: "light-blue--header",
            align: "center",
            headerAlign: "center",
          },
        ]}
        rows={detailRows}
      />
      <Card sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardContent>
          <Typography sx={{ flex: 5 }}></Typography>
          <Typography
            sx={{
              fontSize: "1.5em",
              width: "200px",
              display: "flex",
              justifyContent: "center",
              marginRight: "24px",
              flex: 2,
            }}
          >
            Grand Total: {totalPrice}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderDetails;
