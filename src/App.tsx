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
    <div className="flex bg-background min-h-screen text-text">
      <Sidebar />

      <div className="w-full flex flex-col gap-8 m-8">
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
