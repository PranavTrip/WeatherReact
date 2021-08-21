import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");

  useEffect(() => {
    const fetchAPI = async () => {
      const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4d28416c98b1d0202c8b499d4b810234
      `);
      const resJSON = await response.json();
      // console.log(resJSON);
      setCity(resJSON.main);
    };
    fetchAPI();
  }, [search]);

  return (
    <>
      <div className="container container-fluid ">
        <h1 className="text-center">Weather App</h1>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search Your City Here"
                onChange={(event) => setSearch(event.target.value)}
              />
              <i class="fa fa-search search-btn"></i>
            </div>

            {city ? (
              <div>
                <h3 className="text-center m-3 city-desc"> {search} </h3>
                <h2 className="text-center m-5 temp-desc">{city.temp} °cel</h2>
                <div className="mt-10 text-center">
                  <span className="m-2 text-center min-temp">
                    | Minimum Temperature:{city.temp_min} °cel |
                  </span>
                  <span className="m-2 text-center max-temp">
                    | Maximum Temperature:{city.temp_max} °cel |
                  </span>
                </div>
              </div>
            ) : (
              <p className="error text-center">
                No Data Found, Please Enter a valid city
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
