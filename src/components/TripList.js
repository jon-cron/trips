import React, { useState, useEffect } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  useEffect(() => {
    // NOTE whenever there is variable that is dynamic such a url and can change, place the variable in the dependency array
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrips(json));
    // NOTE here is the dependency array
  }, [url]);
  console.log(trips);

  return (
    <div>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/trips/?id=1");
        }}
      >
        search by id
      </button>
      <h2>TripList</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>${trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
