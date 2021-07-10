import { useContext } from "react";
import { context } from "./assets/environ/context";

export default function People() {
  const { people, getPerson, person } = useContext(context);
  return (
    <div>
      {people.map((person, index) => (
        <div key={index} onClick={() => getPerson(person.url)}>
          {person.name}
        </div>
      ))}
    </div>
  );
}
