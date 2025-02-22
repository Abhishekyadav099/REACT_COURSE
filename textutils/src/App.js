import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'InstallTextUtils Now'
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}


      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />}>
            </Route>
          </Routes>
        </div>
      </Router>


      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>
        <About/>
        </div> */}

    </>
  );
}

export default App;








// // import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <>
//       <Navbar title="TextUtils" aboutText="About"/>
//       {/* <Navbar/> */}
//       <Navbar title="TextUtils"/>
//     </>
//   );
// }

// export default App;


