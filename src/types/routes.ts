export enum ROUTES {
    AUTH = '/',
    DASHBOARD = '/dashboard'
}

const menuLinks = [
    { id:1, to: '/dashboard', text: 'Home'},
    { id:2, to: '/pages', text: 'Strony'},
    { id:3, to: '/category', text: 'Kategorie'},
    { id:4, to: '/products', text: 'Produkty'},
    { id:5, to: '/orders', text: 'Zamówienia'},
    { id:6, to: '/clients', text: 'Klienci'},
];

export default menuLinks;
