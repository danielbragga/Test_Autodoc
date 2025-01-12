<<<<<<< HEAD
import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useRef } from "react";
const Inputs = ({ setQuery, unit }) => {
  // const [city, setCity] = useState("");

  const cityRef = useRef("");

  const submitHandler = () => {
    if (cityRef.current.value !== "") setQuery({ q: cityRef.current.value });
  };

  return (
    <div className="flex flex-row justify-center my-5">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          ref={cityRef}
          placeholder="search..."
          className="text-m font-light p-1.5 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={submitHandler}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-sl text-white font-light transition ease-out hover:scale-125"
=======
import React, { useState } from "react";
import { UilSearchAlt, UilMapMarkerShield } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearchAlt
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilMapMarkerShield
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="graus"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
>>>>>>> dfac73505cd79a7a9593a2f90d2bdafb19d39efe
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
<<<<<<< HEAD
          name="imperial"
          className="text-sl text-white transition ease-out font-light hover:scale-125"
=======
          name="fahrenheit"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
>>>>>>> dfac73505cd79a7a9593a2f90d2bdafb19d39efe
        >
          °F
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> dfac73505cd79a7a9593a2f90d2bdafb19d39efe

export default Inputs;
