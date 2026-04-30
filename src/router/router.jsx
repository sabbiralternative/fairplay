import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import APK from "../pages/APK/APK";
import EventDetails from "../pages/EventDetails/EventDetails";
import Casino from "../pages/Casino/Casino";
import StakeSettings from "../pages/StakeSettings/StakeSettings";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/stake-settings",
          element: <StakeSettings />,
        },
        {
          path: "/apk",
          element: <APK />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
