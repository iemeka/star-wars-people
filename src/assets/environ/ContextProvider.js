import React, { useCallback, useEffect, useRef, useState } from "react";
import { context } from "./context";

function ContextProvider({ children }) {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [pageUrl, setPageUrl] = useState(
    "https://swapi.dev/api/people/?page=1"
  );
  const requestOPtions = useRef(null);
  requestOPtions.current = {
    method: "GET",
    headers: { "Content-type": "application/json" },
  };

  const getPerson = useCallback((personUrl) => {
    fetch(personUrl, requestOPtions.current)
      .then((response) => response.json())
      .then((data) => setPerson(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(pageUrl, requestOPtions.current)
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
  }, [pageUrl]);

  const value = {
    people,
    getPerson,
    person,
    setPageUrl,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}

export default ContextProvider;
