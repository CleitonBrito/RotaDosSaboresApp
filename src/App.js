import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import PizzaShopping from './Pages/PizzaShopping';
import PizzaMake from './Pages/PizzaMake';
import CartShopping from './Pages/CartShopping';

const router = createBrowserRouter([
    {
        name: "home",
        path: '/',
        element: <Home />
    },
    {
        name: "pizzaItem",
        path: '/pizza/:id',
        element: <PizzaShopping />
    },
    {
        name: "pizzaMake",
        path: '/pizzaMake',
        element: <PizzaMake />
    },
    {
        name: "cart",
        path: '/cart',
        element: <CartShopping />
    }
])

export { router };