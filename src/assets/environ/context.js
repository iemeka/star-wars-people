import React from "react";

export const context = React.createContext({
  setPeople: () => {},
  people: [],
  getPerson: () => {},
  person: {},
  setPerson: () => {},
  pageUrl: "",
  setPageUrl: () => {},
});
