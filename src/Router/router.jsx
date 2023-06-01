import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

export default router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/show-summary',

            }
        ]
    }
])