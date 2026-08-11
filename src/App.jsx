import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Honors from "./pages/Honors";
import BinaryRain from "./components/BinaryRain";
import BinaryToggle from "./components/BinaryToggle";
import "./App.css";

function App() {

    const [binaryActive, setBinaryActive] =
        useState(false);

    return (

        <>

            <Navbar />

            <BinaryToggle
                active={binaryActive}
                setActive={setBinaryActive}
            />

            <BinaryRain
                active={binaryActive}
            />

            <Home
              binaryActive={binaryActive}
              setBinaryActive={setBinaryActive} 
            />

        </>    

    );

}

export default App;