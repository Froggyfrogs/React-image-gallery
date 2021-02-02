import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            type="text"
          />
        </div>

        <button
          onClick={console.log("click")}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
