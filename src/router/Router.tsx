import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement:
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);
export default router;
