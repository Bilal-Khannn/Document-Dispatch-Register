import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  faFileImport,
  faMagnifyingGlassArrowRight,
  faShuffle,
  faQrcode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

//Component import here
import DispatchDoc from "./Dispatchdoc";
import SearchDoc from "./SearchDoc";
import TrackDoc from "./TrackDoc";
import Users from "./Users";
import Scanner from "./Scanner";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/6 border-r flex flex-col">
        <ul className="space-y-4 mx-auto flex flex-col w-full">
          <button
            className={`flex flex-col py-4 px-4 text-customGreenBlue text-lg font-medium rounded-md hover:bg-emerald-500 hover:text-white transition duration-300     ${
              selectedOption === "dispatchDoc"
                ? "bg-emerald-500 text-white"
                : ""
            }`}
            onClick={() => handleOptionClick("dispatchDoc")}
          >
            <FontAwesomeIcon icon={faFileImport} className="mb-2" />
            Dispatch Document
          </button>
          <button
            className={`flex flex-col  py-4 px-4 cursor-pointer text-customGreenBlue text-lg font-medium rounded-md hover:bg-emerald-500 hover:text-white transition duration-300 ${
              selectedOption === "searchDoc" ? "bg-emerald-500 text-white" : ""
            }`}
            onClick={() => handleOptionClick("searchDoc")}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlassArrowRight}
              className="mb-2 "
            />
            Search Document
          </button>
          <button
            className={`flex flex-col py-4 px-4 text-customGreenBlue text-lg font-medium rounded-md hover:bg-emerald-500 hover:text-white transition duration-300 ${
              selectedOption === "trackDoc" ? "bg-emerald-500 text-white" : ""
            }`}
            onClick={() => handleOptionClick("trackDoc")}
          >
            <FontAwesomeIcon icon={faShuffle} className="mb-2 " />
            Track Document
          </button>
          <button
            className={`flex flex-col py-4 px-4 text-customGreenBlue text-lg font-medium rounded-md hover:bg-emerald-500 hover:text-white transition duration-300 ${
              selectedOption === "viewProjectProgress"
                ? "bg-emerald-500 text-white"
                : ""
            }`}
            onClick={() => handleOptionClick("scanDoc")}
          >
            <FontAwesomeIcon icon={faQrcode} className="mb-2" />
            Scan Document
          </button>
          <button
            className={`flex flex-col py-4 px-4 text-customGreenBlue text-lg font-medium rounded-md hover:bg-emerald-500 hover:text-white transition duration-300 ${
              selectedOption === "collaborate"
                ? "bg-emerald-500 text-white"
                : ""
            }`}
            onClick={() => handleOptionClick("manageUsers")}
          >
            <FontAwesomeIcon icon={faUsers} className="mb-2" />
            Manager Users
          </button>
        </ul>
      </div>
      <div className="w-5/6  p-4 bg-indigo-50 overflow-auto">
        {selectedOption === "dispatchDoc" && (
          <>
            <DispatchDoc />
          </>
        )}
        {selectedOption === "searchDoc" && (
          <>
            <SearchDoc />
          </>
        )}
        {selectedOption === "trackDoc" && (
          <>
            <TrackDoc />
          </>
        )}
        {selectedOption === "scanDoc" && (
          <>
            <Scanner />
          </>
        )}
        {selectedOption === "manageUsers" && (
          <>
            <Users />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
