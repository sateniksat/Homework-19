import React, { useContext } from "react";
import { EditContext } from "../context/EditContext";
import Edit from "./Edit";

export default function Welcome() {
  const { edit, setedit, sign, setsign } = useContext(EditContext);
  return (
    <>
      <div>
        {sign === 0 && (
          <div>
            <h1>Welcome!</h1>
            <h4>Please select an exercise from the list on the left side.</h4>
          </div>
        )}
      </div>
      <div>
        {sign === 1 && (
          <div style={{ alignItems: "center" }}>
            <div>edit</div>
            <Edit />
          </div>
        )}
      </div>
    </>
  );
}
