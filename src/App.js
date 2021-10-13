import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Search from "./Components/Search";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");

  const fetchAPI = async () => {
    const response =
      await fetch(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${search}
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
      <div className="container main-body">
        <div className="row mx-0">
          <div className="center-content col-12 col-md-8 col-lg-6 offset-md-2">
            <Search setSearch={setSearch} fetchAPI={fetchAPI} />
            <Card city={city} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
