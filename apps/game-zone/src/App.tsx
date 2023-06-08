import { Shell } from "ui";
import React, { Suspense } from "react";

const CardPicker = React.lazy(() => import("cardpicker/Cardpicker"));
const UpDown = React.lazy(() => import("updown/UpDown"));

function App() {
  return (
    <Shell title="game zone">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{ display: "flex", gap: "20px" }}>
            <CardPicker />
            <UpDown />
          </div>
        </Suspense>
      </div>
    </Shell>
  );
}

export default App;
