//import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
//import './index.css'
//import App from './App.jsx'

// these examples are based on content from react and react native, vite, and from Pakt publishing.
// Some content may be copyrighted but is included under "fair use" rules for teaching purposes.
// Not for reuse or redistribution!

//---------------------------
// Default Vite function
//----------------------------
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// Create a root
const root = createRoot(document.getElementById("root"));

//----------------------------
// Component Properties
//-----------------------------

// import MyComponent from "./MyComponent";
/*
root.render(
  <section>
    <MyComponent
      title="Welcome to My App"
      description="This is a sample component."
    />
  </section>
);
*/

//---------------------------------------
// Passing property values... and default
//---------------------------------------

/*
import MyButton from "./MyButton";
import MyList from "./MyList";
import MyComponent from "./MyComponent";

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
};

function render(props) {
  root.render(
    <main>
      <MyComponent
        title="Welcome to My App"
        description="This is a sample component."
      />
      <MyButton text={props.text} disabled={props.disabled} />
      <MyButton text="Another Button" disabled />
      <MyList items={props.items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);

*/

//REACT Hooks
import App from "./App";

//----------------------------
// Initial state values
//-----------------------------

root.render(<App />);

//----------------------------
// Updating state values
//-----------------------------

/*
root.render(<App />);
*/

//----------------------------
// Fetching component data
//-----------------------------

/*
root.render(<App />);
*/

//----------------------------
// Canceling actions and resetting state
//-----------------------------

/*
root.render(<App />);
*/

//----------------------------
// Optimizing side-effect actions
//-----------------------------

/*
root.render(<App />);
*/
