import "./Control.css";
import { useContext } from "react";
import { context } from "./assets/environ/context";

import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";

export default function Control() {
  const { people, setPageUrl } = useContext(context);

  return (
    <div className="control-btn">
      <button
        onClick={() => {
          setPageUrl(people.previous);
        }}
      >
        <Icon
          path={mdiChevronLeft}
          title="contactless-payment"
          size={1.5}
          color="#fff"
        />
      </button>
      <button
        onClick={() => {
          setPageUrl(people.next);
        }}
      >
        <Icon
          path={mdiChevronRight}
          title="contactless-payment"
          size={1.5}
          color="#fff"
        />
      </button>
    </div>
  );
}
