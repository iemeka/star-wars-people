import { useContext } from "react";
import { context } from "./assets/environ/context";
import ListOut from "./ListOut";
import "./PeopleDetail.css";

export default function PeopleDetail() {
  const { person } = useContext(context);
  return (
    <>
      {Object.keys(person).length < 1 ? null : (
        <>
          <div className="title">
            <h1>{person.name}</h1>
          </div>
          <div className="detail">
            <div>
              <span> Name : </span>
              {person.name}{" "}
            </div>
            <div>
              <span>Date of birth : </span>
              {person.birth_year}{" "}
            </div>
            <div>
              <span>Gender : </span>
              {person.gender}{" "}
            </div>
            <div>
              <span>Eye Color : </span>
              {person.eye_color}
            </div>
            <div>
              <span>Hair Color : </span>
              {person.hair_color}{" "}
            </div>
            <div>
              <span>Skin Color : </span>
              {person.skin_color}{" "}
            </div>
            <div>
              <span>Height : </span>
              {person.height}{" "}
            </div>
            <div>
              <span>mass : </span>
              {person.mass}
            </div>
            <div>
              <span> Home world : </span>
              {person.homeworld}
            </div>
            <div>
              <span>Films :</span> <ListOut items={person.films || []} />
            </div>
            <div>
              <span>Species : </span>
              <ListOut items={person.species || []} />{" "}
            </div>
            <div>
              <span>Vehicles : </span>
              <ListOut items={person.vehicles || []} />{" "}
            </div>
            <div>
              <span>starships : </span>{" "}
              <ListOut items={person.starships || []} />{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
}
