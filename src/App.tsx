import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard  from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/schedule", element: <NotFound /> },
  { path: "/message", element: <NotFound /> },
  { path: "/analytics", element: <NotFound /> },
  { path: "/team", element: <NotFound /> },
];

const App = () => {
  return (
    <div className="bg-background-dark">
    <div className="max-w-[1440px] m-auto flex bg-background text-text">
      <Sidebar />

      <div className="w-full flex flex-col gap-8 m-4 sm:my-8 sm:mx-7">
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </div>
  );
};

export default App;
