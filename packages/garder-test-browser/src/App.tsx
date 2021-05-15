import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { sdk } from "./core-test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>js runtime error</p>
          <button
            onClick={function () {
              throw new Error("error test");
            }}
          >
            error test
          </button>
        </div>

        <div>
          source error
          <img src={"asdasd"} alt={"test"}></img>
        </div>

        <div>
          unhandle prmose error test
          <button
            onClick={() => {
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  reject("promise unhandle error test");
                }, 1000);
              });
            }}
          >
            test
          </button>
        </div>

        <div>
          xhr error test
          <button
            onClick={() => {
              var oReq = new XMLHttpRequest();
              oReq.onload = function (e) {
                var arraybuffer = oReq.response; // not responseText
                /* ... */
              };
              oReq.open("GET", "http://asdhuiad");
              oReq.responseType = "arraybuffer";
              oReq.send();
            }}
          >
            xhr error test
          </button>
        </div>

        <div>
          fetch error test
          <button
            onClick={() => {
              fetch("http://asdasd")
                .then((response) => {
                  console.log("fetch response:", response);
                })
                .catch((error) => {
                  console.log("error: ", error);
                });
            }}
          >
            fetch error test
          </button>
        </div>
      </header>
    </div>
  );
}

sdk.init();
export default App;
