import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");

  const fetchAPI = async () => {
    const response =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4d28416c98b1d0202c8b499d4b810234
    `);
    const resJSON = await response.json();
    setCity(resJSON);
  };
  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mx-0">
          <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
            <h1 className="text-center">Weather App</h1>
            <hr />
            <div className="card w-100">
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
                  <button
                    type="button"
                    className="btn btn-primary mx-1"
                    onClick={() => fetchAPI()}
                  >
                    Search
                  </button>
                </div>

                {city ? (
                  <div>
                    <h3 className="text-center my-3 city-desc">{city.name}</h3>
                    <h2 className="text-center my-5 temp-desc">
                      {city.main.temp} °cel
                    </h2>
                    <div className="mt-10 text-center">
                      <span className="m-2 text-center min-temp d-inline-block">
                        | Minimum Temperature:{city.main.temp_min} °cel |
                      </span>
                      <span className="m-2 text-center max-temp d-inline-block">
                        | Maximum Temperature:{city.main.temp_max} °cel |
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
        </div>
      </div>
    </>
  );
};

export default App;
