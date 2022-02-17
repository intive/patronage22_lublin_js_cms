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
    {to: '/dashboard', label: 'Home'},
    {to: '/pages', label: 'Strony'},
    {to: '/category', label: 'Kategorie'},
    {to: '/products', label: 'Produkty'},
    {to: '/orders', label: 'Zamówienia'},
    {to: '/clients', label: 'Klienci'},
];
export default menuLinks;
