import { useState, useEffect } from "react";
import { assets } from "../assets";
import Search from "./Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems1, navItems2, navItems3 } from "./Sidebar";

const Header = () => {
  const [query, setQuery] = useState<string>("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const routeTitles: { [key: string]: string } = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/schedule": "Schedule",
    "/message": "Message",
    "/analytics": "Analytics",
    "/team": "Team",
    "/profile": "Profile",
    "/settings": "Settings",
    "/help": "Help",
    "/logout": "Logout",
  };

  const activeTitle = routeTitles[location.pathname];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const user = {
    name: "Mirie Kiritani",
    pp: assets.gallery,
  };

  return (
    <div>
      <div className="w-full hidden lg:grid lg:grid-cols-5 xl:grid-cols-3 gap-7 text-sm xl:text-base">
        <div className="lg:col-span-3 xl:col-span-2 ">
          <Search query={query} setQuery={setQuery} />
        </div>
        <div className="bg-white rounded-full p-2 flex gap-[10px] items-center justify-center lg:col-span-2 xl:col-span-1">
          <div>
            <img
              src={assets.bell}
              alt="notification"
              className="px-5 py-3 hover:bg-background-dark cursor-pointer border border-background-dark rounded-full"
            />
          </div>
          <div>
            <img
              src={assets.message}
              alt="message"
              className="px-5 py-3 hover:bg-background-dark cursor-pointer  border border-background-dark rounded-full"
            />
          </div>
          <div className="flex items-center justify-center gap-2.5 cursor-pointer">
            <div className="bg-background-dark rounded-full flex items-center justify-center p-2.5 outline-1 outline-background-dark border border-white">
              <img src={user.pp} alt="logo" className="w-6" />
            </div>
            <span>{user.name}</span>
            <img src={assets.arrowDown} alt="arrow-down" />
          </div>
        </div>
      </div>

      {/* for small screen */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center gap-2">
            <div className="w-5 sm:w-8" onClick={toggleMenu}>
              <img src={assets.hamburger} alt="Menu" className="w-full" />
            </div>
            <span className="font-semibold text-2xl md:text-3xl">{activeTitle}</span>
            <div className="bg-background-dark rounded-full flex items-center justify-center p-2 sm:p-3">
              <img
                src={assets.gallery}
                alt="Profile Picture"
                className="w-4 sm:w-6"
              />
            </div>
          </div>
          <div>
            <Search query={query} setQuery={setQuery} />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-full z-10`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center justify-between gap-4 p-4" onClick={toggleMenu}>
            <Link to="/" onClick={toggleMenu}>
            <span className="bg-background-dark w-[178px] flex items-center justify-center">
              <img src={assets.gallery} alt="logo" className="my-1.5"/>
            </span>
          </Link>
            <img src={assets.x} />
          </div>
          <ul className="p-4 flex flex-col gap-5">
            {navItems1.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `flex ${isActive ? "font-semibold" : ""}`
                }
              >
                {({ isActive }) => (
                  <li className="flex gap-5">
                    <img
                      src={isActive ? item.hoverIcon : item.icon}
                      alt={item.name}
                    />
                    <span className="">{item.name}</span>
                  </li>
                )}
              </NavLink>
            ))}
            {navItems2.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `flex ${isActive ? "font-semibold" : ""}`
                }
              >
                {({ isActive }) => (
                  <li className="flex gap-5">
                    <img
                      src={isActive ? item.hoverIcon : item.icon}
                      alt={item.name}
                    />
                    <span className="">{item.name}</span>
                  </li>
                )}
              </NavLink>
            ))}
            {navItems3.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `flex ${isActive ? "font-semibold" : ""}`
                }
              >
                {({ isActive }) => (
                  <li className="flex gap-5">
                    <img
                      src={isActive ? item.hoverIcon : item.icon}
                      alt={item.name}
                    />
                    <span className="">{item.name}</span>
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
