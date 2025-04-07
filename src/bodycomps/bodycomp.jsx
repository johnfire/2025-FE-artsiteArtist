/* eslint-disable no-console */
import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

function BodyComp() {
  const handlePostClick = () => {
    console.log("handleClick working!");
    axios
      .post("http://localhost:3000/image-upload", {
        //ADD AXIOS POST REQUEST
        value: "This is my awesome test value!",
      })
      .then((res) => console.log("POST here is what we got back ", res));
  };

  const handleGetClick = () => {
    console.log("handleGetClick working!");
    axios
      .get("http://localhost:3000/image-upload", {})
      .then((res) => console.log("GET here is what we got back ", res));
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(246, 249, 251)",
        color: "black",
        border: "10px solid red",
      }}
    >
      <p> Upload a file here please </p>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <Button onClick={handlePostClick}>upload this baby</Button>
      <Button onClick={handleGetClick}>get this baby</Button>
    </div>
  );
}

export default BodyComp;
