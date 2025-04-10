import { useState} from "react";
import { icons } from "../assets/icons";


const Analytics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Weekly");

  const options = ["Weekly", "Monthly", "Yearly"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
   
    <div className="flex flex-col gap-6">
      <div className="flex justify-between align-center">
        <h3 className="font-bold text-xl">Analytics</h3>
        <div className="flex items-center gap-1.5 sm:gap-8">
          <div className="flex items-center justify-between gap-1 sm:gap-3 text-[9px] sm:text-sm">
            <div className="bg-custom-blue w-1 h-1 sm:w-3 sm:h-3 rounded-full"></div>
            <span>Label 1</span>
          </div>

          <div className="flex items-center justify-between gap-1 sm:gap-3 text-[9px] sm:text-sm">
            <div className="bg-custom-yellow w-1 h-1 sm:w-3 sm:h-3 rounded-full"></div>
            <span>Label 2</span>
          </div>

          <div className="relative">
            <div
              className="border border-background-dark rounded-lg p-1 sm:p-2 cursor-pointer bg-white flex gap-2 w-fit"
              onClick={toggleDropdown}
            >
              <span className="text-[8px] sm:text-sm text-text/70">{selectedOption}</span>
              <img src={icons.arrowDown} alt="down-arrow" className="w-1.5 sm:w-3" />
            </div>

            {isOpen && (
              <ul className="absolute w-24 mt-1 border border-background-dark rounded-lg bg-white shadow-lg z-10">
                {options.map((option) => (
                  <li
                    key={option}
                    className="p-2 hover:bg-background cursor-pointer text-sm text-text/70"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="w-full">
        <img src={icons.graph} alt="Graph" className="w-full h-auto"/>
      </div>
    </div>
  );
};

export default Analytics;
