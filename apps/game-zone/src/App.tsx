import { Shell } from "ui";
import React from "react";

//const CardPicker = React.lazy(() => import("cardpicker/CardPicker"));
const UpDown = React.lazy(() => import("updown/UpDown"));
// console.log(CardPicker);

function App() {
  return (
    <Shell title="game zone">
      <h1>Game Zone</h1>

      <div>{/* <CardPicker /> */}</div>
    </Shell>
  );
}

export default App;
