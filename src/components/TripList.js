import React, { useState, useEffect } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);
  console.log(trips);

  return (
    <div>
      <h2>TripList</h2>
    </div>
  );
}
