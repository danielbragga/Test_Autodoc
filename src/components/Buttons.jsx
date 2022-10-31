import React from "react";

function Buttons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Fortaleza",
    },
    {
      id: 2,
      title: "São Paulo",
    },
    {
      id: 3,
      title: "Cuiabá",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
