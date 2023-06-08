import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
const ApiComp = () => {
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState("products");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/${filter}?limit=10`);
    const data = await res.json();
    setApiData(filter === "products" ? data.products : data.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const renderData = (elem) => {
    switch (filter) {
      case "products":
        return (
          <div className="card" style={{ width: "23rem" }}>
            <img src={elem.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elem.title}</h5>
              <p className="card-text">{elem.description}</p>
              <p className="card-text">{elem.price}</p>
            </div>
          </div>
        );
      case "users":
        return (
          <div className="card" style={{ width: "23rem" }}>
            <img src={elem.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{elem.firstName}</h5>
              <p className="card-text">{elem.lastName}</p>
              <p className="card-text">{elem.email}</p>
            </div>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <>
      {loading ? (
        <div
          className="container d-flex flex-column justify-content-center"
          style={{
            height: "100vh"
          }}
        >
          <LinearProgress />
          <p className="fs-6"> Please wait...</p>
        </div>
      ) : (
        <div>
          <div>
            <button
              className="btn btn-primary mx-1"
              onClick={() => setFilter("products")}
            >
              Products
            </button>
            <button
              className="btn btn-primary mx-1"
              onClick={() => setFilter("users")}
            >
              Users
            </button>
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            {apiData.length > 0 &&
              apiData.map((elem, idx) => (
                <div
                  key={idx}
                  style={{
                    marginTop: "20px"
                  }}
                >
                  {renderData(elem)}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ApiComp;
