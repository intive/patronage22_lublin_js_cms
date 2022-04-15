import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

export enum ROUTES {
  AUTH = "/",
  DASHBOARD = "/dashboard",
  PAGES = "/pages",
  CATEGORIES = "/categories",
  PRODUCTS = "/products",
  ADD_PRODUCT = "/add-product",
  ORDERS = "/orders",
  CLIENTS = "/clients",
  PRODUCT = "/product",
  PRODUCT_DETAILS = "/product/edit/:id",
  ORDER_DETAILS = "/order/details/:id",
  CATEGORY_ADD = "/add-category",
  PAGE_ADD = "/add-page",
  CATEGORY_EDIT = "/category/edit/:id",
}

const menuLinks = [
  { id: 1, to: ROUTES.DASHBOARD, label: "Home", icon: HomeOutlinedIcon },
  { id: 2, to: ROUTES.PAGES, label: "Pages", icon: AutoStoriesOutlinedIcon },
  {
    id: 3,
    to: ROUTES.CATEGORIES,
    label: "Categories",
    icon: CategoryOutlinedIcon,
  },
  {
    id: 4,
    to: ROUTES.PRODUCTS,
    label: "Products",
    icon: Inventory2OutlinedIcon,
  },
  {
    id: 5,
    to: ROUTES.ORDERS,
    label: "Orders",
    icon: SubscriptionsOutlinedIcon,
  },
  {
    id: 6,
    to: ROUTES.CLIENTS,
    label: "Clients",
    icon: PeopleOutlinedIcon,
  },
];

export default menuLinks;
