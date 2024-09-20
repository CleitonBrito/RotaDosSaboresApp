import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import PizzaShopping from './Pages/PizzaShopping';

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
    }
])

export { router };