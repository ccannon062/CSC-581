//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//-----------------------
// Default Vite App
//-----------------------
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import * as React from "react";

//-----------------------
// Initial state values
//-----------------------

/*
export default function App() {
  const [name] = React.useState("Mike");
  const [age] = React.useState(32);

  return (
    <section>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </section>
  );
}
*/

//-----------------------
// Updating state values
//-----------------------

/*
function App() {
  const [name, setName] = React.useState("Mike");
  const [age, setAge] = React.useState(32);

  return (
    <>
      <section>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  );
}

export default App;
*/

//-----------------------
// Fetching component data
//-----------------------

function App() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  const fetchUser = React.useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Mike" });
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  });

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;

//----------------------------
// Canceling actions and resetting state
//-----------------------------

/*
import Timer from "./Timer";

const ShowHideTimer = ({ show }) => (show ? <Timer /> : null);

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      <ShowHideTimer show={show} />
    </>
  );
}

export default App;
*/

//----------------------------
// Optimizing side-effect actions
//-----------------------------
/*
function App() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  const fetchUser = React.useCallback(() => {
    console.count("fetching user");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Mike" });
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  }, []);

  return (
    <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </>
  );
}

export default App;
*/
