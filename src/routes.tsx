import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/pets',
        element: <h1>Pets</h1>,
    },
    {
        path: '/admin',
        element: <h1>Admin</h1>,
    },
])

export default router