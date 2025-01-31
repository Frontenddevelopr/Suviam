import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Whatsapppop from "./components/Popup/Whatsapppop";

function App() {
  return (
    <>
      <div className="relative">
        <Homepage />
        <div className="z-50 fixed bottom-10 right-0  ">
          <Whatsapppop />
        </div>
      </div>
    </>
  );
}

export default App;
