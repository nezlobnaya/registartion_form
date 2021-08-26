import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="d-flex justify-content-center">
    <div className="spinner" role="status">
      <img src={loading} alt="loading" />
    </div>
  </div>
);

export default Loading;
