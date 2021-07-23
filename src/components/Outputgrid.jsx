import React from "react";
import Button from "./Button";
import "./outputgrid.css";

function Outputgrid(props) {
  var grid = props.grid;
  //console.log(grid);
  if (grid.length === 0) {
    return (
      <div className="outputgrid col">
        <h2 style={{ color: "#FF6767" }}>Opps! No Solution Exists</h2>
        <span
          style={{ textAlign: "center" }}
          onClick={() => {
            props.gobackfunction(null);
          }}
        >
          <Button text={"Go Back"} />
        </span>
      </div>
    );
  } else {
    var Preparedgrid = [];
    let key = 0;
    for (let i = 0; i < 9; i++) {
      var T = [];
      for (let j = 0; j < 9; j++) {
        T.push(
          <span key={key++} className="outputgriditem">
            {grid[i][j]}
          </span>
        );
      }

      Preparedgrid.push(
        <div key={key++} className="row">
          {T}
        </div>
      );
    }

    return (
      <div className="col outputgrid">
        <h2 className="outputgridheading">Solution</h2>
        {Preparedgrid}
        <span
          style={{ textAlign: "center" }}
          onClick={() => {
            props.gobackfunction(null);
          }}
        >
          <Button text={"Go Back"} />
        </span>
      </div>
    );
  }
}

export default Outputgrid;
