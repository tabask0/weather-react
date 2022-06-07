import React from "react";

const City = (props) => {
  const now = new Date();
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let time = d.toISOString().slice(11, 16);

    return `${time} ${day} ${date} ${month} ${year}`;
  };

  const { city, country, description, tempMin, tempMax, current, icon } = props;

  return (
    <div
      className={
        city
          ? `w-4/12 bg-white bg-opacity-60 text-center justify-center m-auto rounded-md p-4`
          : ""
      }
    >
      {props ? (
        <div>
          <h1 className="text-3xl">
            {city ? `${city},` : ""} {country}
          </h1>
          <p>{city ? dateBuilder(now) : ""}</p>
          <p>{description}</p>
          {city ? (
            <img
              className="text-center m-auto"
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              alt="icon"
              width={50}
              height={50}
            />
          ) : (
            ""
          )}
          <h3 className="mb-4">{city ? `${Math.round(current)}°C` : ""}</h3>
          <p>min / max</p>
          <p>
            {city ? `${Math.round(tempMin)}°C / ${Math.round(tempMax)}°C` : ""}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default City;
