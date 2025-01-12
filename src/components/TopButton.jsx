import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    { id: 1, title: "Fortaleza" },
    { id: 2, title: "Brasília" },
    { id: 3, title: "São Paulo" },
    { id: 4, title: "Rio de Janeiro" },
    { id: 5, title: "Minas Gerais" },
  ];

  return (
    <div className="flex items-center justify-around my-1.5">
      {cities.map((city) => (
        <button
          className="text-white text- font-medium"
          key={city.id}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
