import React from "react";
import { Typography } from "@mui/material";
import CustomTable from "../components/Table";
import { PaymentStatus, CustomRowProps, HeadCell } from "../types/table";
// import getOrders from "../components/lib/orders";
import OrderRow from "../components/Table/OrderRow";

export const mockOrders = [
  {
    id: 1,
    userName: "Adam",
    userSurname: "Nowak",
    amount: 1000,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.DONE,
  },
  {
    id: 2,
    userName: "Marek",
    userSurname: "Kowalski",
    amount: 2500,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.REJECTED,
  },
  {
    id: 3,
    userName: "Arkadiusz",
    userSurname: "Nowak",
    amount: 3425,
    orderDate: "2022-02-06T14:20:02.000Z",
    paymentStatus: PaymentStatus.CANCELLED,
  },
];

const Orders: React.FC = () => {
  // const [orders, setOrders] = useState<OrderObject[]>([]);

  // useEffect(() => {
  //   getOrders()
  //     .then((response) => {
  //       setOrders(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const headCells: HeadCell[] = [
    {
      id: "id",
      numeric: true,
      label: "ID",
    },
    {
      id: "userName",
      numeric: false,
      label: "USER NAME",
    },
    {
      id: "userSurname",
      numeric: false,
      label: "USER SURNAME",
    },
    {
      id: "totalPrice",
      numeric: true,
      label: "TOTAL PRICE",
    },
    {
      id: "orderDate",
      numeric: false,
      label: "ORDER DATE",
    },
    {
      id: "paymentStatus",
      numeric: false,
      label: "PAYMENT STATUS",
    },
    {
      id: "slug",
      numeric: false,
      label: "",
    },
  ];
  return (
    <section>
      <Typography variant="h4" p={2} sx={{ color: "#0f0f0f" }}>
        Orders
      </Typography>
      <CustomTable
        customRow={(props: CustomRowProps) => <OrderRow {...props} />}
        headCells={headCells}
        data={mockOrders}
      />
    </section>
  );
};

export default Orders;
