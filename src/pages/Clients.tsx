import React from "react";
import { Typography } from "@mui/material";
import ClientRow from "../components/Table/ClientRow";
import { CustomRowProps, HeadCell } from "../types/table";
import CustomTable from "../components/Table";

const mockClients = [
  {
    id: 1,
    active: true,
    firstName: "Piotr",
    lastName: "Małysz",
    address: "Leśna 2",
    postalCode: "20-600",
    email: "malyszek@gmail.com",
    phone: "600948375",
  },
  {
    id: 2,
    active: false,
    firstName: "Andrzej",
    lastName: "Niedzielan",
    address: "Muzyczna 12",
    postalCode: "21-650",
    email: "pNosdwak@gmail.com",
    phone: "50948375",
  },
  {
    id: 3,
    active: true,
    firstName: "Piotr",
    lastName: "Nowak",
    address: "Platera 11",
    postalCode: "01-300",
    email: "NowakPiotr@gmail.com",
    phone: "620948375",
  },
  {
    id: 4,
    active: true,
    firstName: "Daniel",
    lastName: "Pyć",
    address: "Kwiatowa 5",
    postalCode: "08-200",
    email: "pdaniel@gmail.com",
    phone: "607948375",
  },
  {
    id: 5,
    active: true,
    firstName: "Grzegorz",
    lastName: "Socha",
    address: "Kawowa 122",
    postalCode: "42-120",
    email: "socha@gmail.com",
    phone: "502948375",
  },
  {
    id: 6,
    active: false,
    firstName: "Monika",
    lastName: "Sosna",
    address: "Długa 68",
    postalCode: "10-310",
    email: "sosna@gmail.com",
    phone: "709948375",
  },
];

const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: true,
    label: "ID",
  },
  {
    id: "active",
    numeric: false,
    label: "ACTIVE",
  },
  {
    id: "firstName",
    numeric: false,
    label: "FIRST NAME",
  },
  {
    id: "lastName",
    numeric: true,
    label: "LAST NAME",
  },
  {
    id: "email",
    numeric: false,
    label: "E-MAIL",
  },
  {
    id: "phone",
    numeric: false,
    label: "PHONE",
  },
  {
    id: "slug",
    numeric: false,
    label: "",
  },
];

function Clients() {
  return (
    <section>
      <Typography variant="h4" p={2} sx={{ color: "#0f0f0f" }}>
        Clients
      </Typography>
      <CustomTable
        customRow={(props: CustomRowProps) => <ClientRow {...props} />}
        headCells={headCells}
        data={mockClients}
      />
    </section>
  );
}
export default Clients;
