import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import PizzaShopping from './Pages/PizzaShopping';
import PizzaMake from './Pages/PizzaMake';

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
    }
])

export { router };