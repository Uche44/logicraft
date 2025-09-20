// App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Header /> */}
        <HomePage />
      </>
    ),
  },
  {
    path: "/track-order",
    element: (
      <>
        {/* <Header /> */}
        <div className="p-6">Track Order Page</div>
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        {/* <Header /> */}
        <div className="p-6">Our Services Page</div>
      </>
    ),
  },
  {
    path: "/solutions",
    element: (
      <>
        {/* <Header /> */}
        <div className="p-6">Solutions Page</div>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        {/* <Header /> */}
        <div className="p-6">About Us Page</div>
      </>
    ),
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
