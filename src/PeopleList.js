import "./PeopleList.css";
import { useContext } from "react";
import { context } from "./assets/environ/context";

export default function PeopleList() {
  const { people, getPerson } = useContext(context);
  const peopleData = people.results || [];
  return (
    <ul>
      {peopleData.map((person, index) => (
        <li key={index} onClick={() => getPerson(person.url)}>
          <h3>{person.name}</h3>
          <p>Gender : {person.gender}</p>
          <p>Height : {person.height}</p>
        </li>
      ))}
    </ul>
  );
}
