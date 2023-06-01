import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Page Components/Home/Home';
import ShowSummary from '../Page Components/Other Pages/ShowSummary';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('https://api.tvmaze.com/search/shows?q=all')
            },
            {
                path: '/show-summary',
                element: <ShowSummary></ShowSummary>
            }
        ]
    }
]);

export default router;