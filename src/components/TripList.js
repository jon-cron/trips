import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips } = useFetch(url);
  // NOTE if you alias out functionality from a useEffect function, place all dynamic variables from that function in the useEffect dependencies
  // const fetchTrips = useCallback(async () => {
  // const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  // NOTE whenever there is variable that is dynamic such a url and can change, place the variable in the dependency array
  // NOTE here is the dependency array
  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);
  // console.log(trips);

  return (
    <div>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/trips/?id=1");
        }}
      >
        search by id
      </button>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/trips/?loc=america");
        }}
      >
        America
      </button>
      <button
        onClick={() => {
          setUrl("http://localhost:3000/trips/?loc=europe");
        }}
      >
        Europe
      </button>
      <h2>TripList</h2>
      <ul>
        {trips?.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>${trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
