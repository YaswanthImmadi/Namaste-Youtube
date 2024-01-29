import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
