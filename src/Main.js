import "./Main.css";
import PeopleDetail from "./PeopleDetail";
import PeopleList from "./PeopleList";
import Control from "./Control";

export default function Main() {
  return (
    <div className="container">
      <div className="top">
        <h1>Star Wars - Characters</h1>
      </div>
      <div className="body">
        <aside>
          <PeopleList />
        </aside>
        <section>
          <PeopleDetail />
          <Control />
        </section>
      </div>
    </div>
  );
}
