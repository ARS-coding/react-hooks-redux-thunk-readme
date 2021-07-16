import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronautsState = useSelector((state) => state.astronauts);

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }

  const astronautsList = astronautsState.entities.map((astro, index) => (
    <li key={index}>{astro.name}</li>
  ));

  return (
    <div>
      <button onClick={handleClick}>Get Astronauts</button>
      {astronautsState.isLoading === true ? <h1>Loading the astronauts...</h1> : astronautsList}
    </div>
  );
}

export default Astronauts;
