import React from "react";
import solver from "../solver";
import Button from "./Button";
import "./grid.css";
import Input from "./Input";
import Outputgrid from "./Outputgrid";

function Getpreparedinputs() {
  var id = 0;
  var f = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(<Input key={id++} />);
    }
    f.push(
      <div key={id++} className="row">
        {row}
      </div>
    );
  }

  return f;
}

function Grid() {
  function handleSubmit(e) {
    e.preventDefault();
    // const { username, password } = e.target.elements;
    var ouputarray = solver(e.target.elements);

    SetOutputgridp(
      <Outputgrid grid={ouputarray} gobackfunction={SetOutputgridp} />
    );
  }

  const [Outputgridp, SetOutputgridp] = React.useState(null);
  var Preparedinputs = Getpreparedinputs();

  if (Outputgridp != null) return Outputgridp;
  else
    return (
      <form className="input-grid" autoComplete="off" onSubmit={handleSubmit}>
        <div className="col">{Preparedinputs}</div>
        <div className="row">
          <Button text={"Solve"} />
        </div>
      </form>
    );
}

export default Grid;
