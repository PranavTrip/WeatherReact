import React from "react";
import "./Card.css";

const Card = ({ city }) => {
  return (
    <>
      <div className="card-main ">
        <div className="card-body">
          {city && (
            <div className="upper">
              <span className="Heading">
                <h1>{city.location && city.location.name}</h1>
                <p className="Heading-para">
                  {city.location && city.location.localtime}
                </p>
              </span>
              <span className="Icon">
                <img src={city.current && city.current.condition.icon} alt="" />
                <p className="Icon-para">
                  {city.current && city.current.condition.text}
                </p>
              </span>
            </div>
          )}

          {city && (
            <div className="upper-right">
              <p className="temp-para-1">
                {city.current && city.current.temp_c} °C
              </p>
              <p className="temp-para-2">
                /{city.current && city.current.temp_f} °F
              </p>
            </div>
          )}

          {city && (
            <div>
              <div className="lower">
                <hr className="breakLine" />
              </div>
              <div className="lower-details">
                <div className="items">
                  <p className="item-heading">Wind Speed</p>
                  <p className="item-details">{city.current.wind_kph} kph</p>
                </div>
                <div className="items">
                  <p className="item-heading2">
                    Wind <br />
                    Direction
                  </p>
                  <p className="item-details2">{city.current.wind_dir}</p>
                </div>
                <div className="items">
                  <p className="item-heading">Precipitation</p>
                  <p className="item-details">{city.current.precip_mm} mm</p>
                </div>
                <div className="items">
                  <p className="item-heading">Humidity</p>
                  <p className="item-details">{city.current.humidity} %</p>
                </div>
                <div className="items">
                  <p className="item-heading">Clouds</p>
                  <p className="item-details">{city.current.cloud} %</p>
                </div>
                <div className="items">
                  <p className="item-heading">Visibility</p>
                  <p className="item-details">{city.current.vis_km} km</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
