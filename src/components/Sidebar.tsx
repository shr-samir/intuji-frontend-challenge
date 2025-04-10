import { icons } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";

export const navItems1 = [
  {
    name: "Dashboard",
    icon: icons.dashboard,
    hoverIcon: icons.dashboardHover,
    path: "/",
  },
  {
    name: "Schedule",
    icon: icons.calendar,
    hoverIcon: icons.calendarHover,
    path: "/schedule",
  },
  {
    name: "Message",
    icon: icons.sms,
    hoverIcon: icons.smsHover,
    path: "/message",
  },
  {
    name: "Analytics",
    icon: icons.chart,
    hoverIcon: icons.chartHover,
    path: "/analytics",
  },
  {
    name: "Team",
    icon: icons.users,
    hoverIcon: icons.usersHover,
    path: "/team",
  },
];

export const navItems2 = [
  {
    name: "Profile",
    icon: icons.user,
    hoverIcon: icons.userHover,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: icons.settings,
    hoverIcon: icons.settingsHover,
    path: "/settings",
  },
];

export const navItems3 = [
  {
    name: "Help",
    icon: icons.infoCircle,
    hoverIcon: icons.infoCircleHover,
    path: "/help",
  },
  {
    name: "Logout",
    icon: icons.logout,
    hoverIcon: icons.logoutHover,
    path: "/logout",
  },
];


const Sidebar = () => {

  return (
    <aside className="bg-white">
      <div className="max-w-[280px] h-full hidden lg:flex flex-col justify-between items-center">
        <div className="flex flex-col gap-3">
          <Link to="/">
            <span className="bg-background-dark w-[80px]  xl:w-[178px] flex items-center justify-center m-9">
              <img src={icons.gallery} alt="logo" className="my-3.5"/>
            </span>
          </Link>

          <div className="flex flex-col gap-9">
            <ul className="flex flex-col justify-center">
              {navItems1.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex ${isActive ? "font-semibold border-l-4 border-custom-blue" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <li className="w-full flex items-center justify-start gap-4 pl-12 p-5">
                      <img
                        src={isActive ? item.hoverIcon : item.icon}
                        alt={item.name}
                      />
                      <span className="hidden xl:block">{item.name}</span>
                    </li>
                  )}
                </NavLink>
              ))}
            </ul>
            <hr className="mx-8" />
            <ul className="flex flex-col w-full">
              {navItems2.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex ${isActive ? "font-semibold border-l-4 border-custom-blue" : ""}`
                  }
                >
                  {({ isActive }) => (
                    <li className="w-full flex items-center justify-start gap-4 pl-12 p-5">
                      <img
                        src={isActive ? item.hoverIcon : item.icon}
                        alt={item.name}
                      />
                      <span className="hidden xl:block">{item.name}</span>
                    </li>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>

        <ul className="flex flex-col w-full mb-9">
          {navItems3.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex ${isActive ? "font-semibold border-l-4 border-custom-blue" : ""}`
              }
            >
              {({ isActive }) => (
                <li className="w-full flex items-center justify-start gap-4 pl-12 p-5">
                  <img
                    src={isActive ? item.hoverIcon : item.icon}
                    alt={item.name}
                  />
                  <span className="hidden xl:block">{item.name}</span>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
