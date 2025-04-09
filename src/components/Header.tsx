import { useState } from "react";
import { icons } from "../assets/icons";
import Search from "./Search";

const Header = () => {
  const [query, setQuery] = useState<string>("");

  const user = {
    name: "Mirie Kiritani",
    pp: icons.gallery,
  };

  return (
    <div className="w-full flex items-center justify-center gap-8">
      <div className="flex-1">
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="bg-white rounded-full p-2 flex gap-[10px]">
        <div>
          <img
            src={icons.bell}
            alt="notification"
            className="px-5 py-3 border rounded-full"
          />
        </div>
        <div>
          <img
            src={icons.message}
            alt="message"
            className="px-5 py-3 border rounded-full"
          />
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <div className="bg-background-dark rounded-full flex items-center justify-center p-3.5 outline-1 outline-background-dark border border-white">
            <img src={user.pp} alt="logo" className="w-6" />
          </div>
          <span>{user.name}</span>
          <img src={icons.arrowDown} alt="arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
