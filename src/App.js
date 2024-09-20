import { createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import PizzaShopping from './Pages/PizzaShopping';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/pizza/:id',
        element: <PizzaShopping />
    },
])

export { router };