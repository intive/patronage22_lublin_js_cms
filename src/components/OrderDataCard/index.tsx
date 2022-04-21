import { CardContent, Typography } from "@mui/material";
import React from "react";
import { OrderObject } from "../../types/table";

export default function CustomerDataCard(props: OrderObject) {
  return (
    <CardContent>
      <Typography
        className="value"
        sx={{ fontSize: "1.5em", fontWeight: "bold" }}
        color="text.primary"
      >
        {`Order #${props.id}`}
      </Typography>
      <Typography color="text.secondary" component="div">
        Customer data:
      </Typography>
      <Typography sx={{ fontSize: "1.5em" }}>
        {`${props.userName} ${props.userSurname}`}
      </Typography>
      <Typography color="text.secondary" component="div">
        Order date:
      </Typography>
      <Typography sx={{ fontSize: "1.5em" }}>
        {props.orderDate.substring(0, 10)}
      </Typography>
      <Typography color="text.secondary" component="div">
        Payment status:
      </Typography>
      <Typography sx={{ fontSize: "1.5em" }}>{props.paymentStatus}</Typography>
    </CardContent>
  );
}
