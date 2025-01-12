<<<<<<< HEAD
import { useState, useEffect } from "react";

import "./App.css";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import ForecastDaily from "./components/ForecastDaily";
import ForecastHourly from "./components/ForecastHourly";
import formatCurrentWeather from "./components/Weather";

function App() {
  const [query, setQuery] = useState({ q: "Berlin" });
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      await formatCurrentWeather({ ...query, unit }).then((data) => {
        setWeather(data);
        console.log(data);
      });
      setIsLoading(false);
    };
    fetchWeather();
  }, [query, unit]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 mb-2 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} unit={unit} setUnit={setUnit} />
      {isLoading && (
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-l font-extralight">
            {`Loading... Please wait :)`}
          </p>
        </div>
      )}
      {weather && !isLoading && (
        <div>
          <TimeLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <div className="flex flex-row items-center justify-between space-x-14">
            <ForecastHourly
              title="hourly forecast"
              items={weather.hourlyForecast}
            />
            <ForecastDaily
              title="daily forecast"
              items={weather.dailyForecast}
            />
          </div>
        </div>
      )}
=======
import "./App.css";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import TimeAndLocalization from "./components/TimeAndLocalization";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./components/services/ForecastServices";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Fortaleza" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocalization weather={weather} />
          <Temperature weather={weather} />

          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
>>>>>>> dfac73505cd79a7a9593a2f90d2bdafb19d39efe
    </div>
  );
}

export default App;
