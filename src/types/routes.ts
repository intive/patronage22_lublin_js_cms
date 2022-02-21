import HomeOutlinedIcons  from '@mui/icons-material/HomeOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
export enum ROUTES {
    AUTH = '/',
    DASHBOARD = '/dashboard',
    PAGES = '/pages',
    CATEGORY = '/category',
    PRODUCTS = '/products',
    ORDERS = '/orders',
    CLIENTS = '/clients',
}

const menuLinks = [
    {id:1, to: ROUTES.DASHBOARD, label: 'Home',icon: HomeOutlinedIcons},
    {id:2, to: ROUTES.PAGES, label: 'Strony',icon:PagesOutlinedIcon},
    {id:4, to: ROUTES.PRODUCTS, label: 'Produkty',icon:CategoryOutlinedIcon},
    {id:5, to: ROUTES.ORDERS, label: 'Zamówienia',icon:SubscriptionsOutlinedIcon},
    {id:6, to: ROUTES.CLIENTS, label: 'Klienci',icon:PeopleOutlinedIcon},
];
export default menuLinks;
