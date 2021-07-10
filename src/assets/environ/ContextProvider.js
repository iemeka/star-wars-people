import React, { useCallback, useEffect, useRef, useState } from "react";
import { context } from "./context";
import { baseUrl } from "../url/baseurl";

function ContextProvider({ children }) {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});

  const requestOPtions = useRef(null);
  requestOPtions.current = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };

  useEffect(() => {
    fetch(baseUrl + "people", requestOPtions.current)
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((err) => console.log(err));
  }, []);

  const getPerson = useCallback((personUrl) => {
    fetch(personUrl, requestOPtions.current)
      .then((response) => response.json())
      .then((data) => setPerson(data))
      .catch((err) => console.log(err));
  }, []);

  const value = {
    people,
    getPerson,
    person,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;
