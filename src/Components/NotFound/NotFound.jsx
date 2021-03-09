import React from "react";
import { useHistory } from "react-router";
import "./NotFound.css";
const NotFound = () => {
  const history = useHistory();
  return (
    <section>
      <div className="not_found">
        <h1 className="display-1 text-danger">
          <code>404</code> Page Not Foung!
        </h1>
        <button onClick={history.goBack} className="btn btn-info mt-5">
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
