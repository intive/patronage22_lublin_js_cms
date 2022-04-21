import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Product,
  PaymentStatus,
  OrderObject,
  HeadCell,
  CustomRowProps,
} from "../types/table";
import { getProducts } from "../components/lib/products";
import CustomerDataCard from "../components/OrderDataCard";
import CustomTable from "../components/Table";
import OrderDetailRowElement from "../components/Table/OrderDetailRow";
import { getOrderDetailRows } from "../components/utils/orderDetailRows";

type UrlParams = {
  id: string;
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

// Every mockedOrderDetails data, juz for exercising purposes, in future, fetched from API
const mockedOrderDetails = [
  { id: 1, orderId: 1, productId: 1, quantity: 3 },
  { id: 2, orderId: 1, productId: 2, quantity: 8 },
  { id: 3, orderId: 1, productId: 3, quantity: 4 },
  { id: 4, orderId: 2, productId: 1, quantity: 7 },
  { id: 5, orderId: 2, productId: 2, quantity: 1 },
  { id: 6, orderId: 2, productId: 3, quantity: 11 },
  { id: 7, orderId: 3, productId: 1, quantity: 2 },
  { id: 12, orderId: 3, productId: 2, quantity: 2 },
];
// The same as above

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

  const detailRows = getOrderDetailRows(mockedOrderDetails, apiProducts, id);
  const currentOrder = mockOrders.find((e) => e.id === id) as OrderObject;
  const totalPrice = detailRows
    .map((e) => e.totalPrice)
    .reduce((partialSum, e) => partialSum + e, 0);

  const headCells: HeadCell[] = [
    {
      id: "id",
      numeric: true,
      label: "ID",
    },
    {
      id: "name",
      numeric: false,
      label: "PRODUCT NAME",
    },
    {
      id: "unitCost",
      numeric: true,
      label: "UNIT COST",
    },
    {
      id: "quantity",
      numeric: true,
      label: "QUANTITY",
    },
    {
      id: "totalPrice",
      numeric: true,
      label: "TOTAL PRICE",
    },
  ];

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
      <CustomTable
        customRow={(props: CustomRowProps) => (
          <OrderDetailRowElement {...props} />
        )}
        headCells={headCells}
        data={detailRows}
      />
      <Card sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CardContent>
          <Typography sx={{ flex: 5 }} />
          <Typography
            sx={{
              fontSize: "1.5em",
            }}
          >
            Grand Total: {`${totalPrice} $`}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderDetails;
