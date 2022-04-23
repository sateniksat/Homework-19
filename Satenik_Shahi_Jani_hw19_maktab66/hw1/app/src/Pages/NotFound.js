import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <h1>Not Found</h1>
      <button onClick={() => navigate(-1)}>
        <span className="iconify-inline" data-icon="bi:arrow-left"></span>
        Back
      </button>
    </div>
  );
}
