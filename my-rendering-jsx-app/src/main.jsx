import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
// these examples are based on content from react and react native, vite, and from Pakt publishing.
// Some content may be copyrighted but is included under "fair use" rules for teaching purposes.
// Not for reuse or redistribution!

//---------------------------
// Default Vite function
//----------------------------

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

//----------------------------
// Hello JSX
//-----------------------------

/*createRoot(document.getElementById("root")).render(
  <p>
    Hello, <strong>JSX</strong>
  </p>
); */

//----------------------------
// React.createElement()
//-----------------------------

/*
createRoot(document.getElementById('root')).render(
React.createElement(
	"p",
	null,
	"Hello, ",
	React.createElement("strong", null, "JSXv2")
) )
*)
*/

//----------------------------
// Built-in HTML tags
//-----------------------------

/*
createRoot(document.getElementById('root')).render(
<div>
    <button />
    <code />
    <input />
    <label />
    <p />
    <pre />
    <select />
    <table />
    <ul />
</div> 
) 
*/

// Create a root
//const root = createRoot(document.getElementById("root"));

//----------------------------
// HTML tag conventions
//-----------------------------

/*
root.render(
  // Note: The "foo" attribute is not a standard HTML attribute.
  <button title="My Button" foo="bar"> 
	  My Button
  </button>
);
// Note: <Button /> will throw an error.
//root.render(<Button />);
*/

//----------------------------
// Describing UI structures
//-----------------------------

/*
root.render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="#item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&copy; 2024</small>
    </footer>
  </section>
);
*/

//----------------------------
// Encapsulating HTML structures
//-----------------------------
/*
function MyComponent() {
  return (
	<section>
  	<h1>My Component</h1>
  	<p>Content in my component...</p>
	</section>
); }

root.render(<MyComponent />);
*/

//----------------------------
// Nested Elements
//-----------------------------

/*
import MySection from "./MySection";
import MyButton from "./MyButton";

root.render(
  <MySection>
	  <MyButton>My Button Text</MyButton>
  </MySection>
);
*/

//----------------------------
// Dynamic property values and text
//-----------------------------

/*
export default function MyButton(props) {
  return <button>{props.children}</button>;
}
 
const enabled = false;
const text = "A Button";
const placeholder = "input value...";
const size = 50;

root.render(
  <section>
	<button disabled={!enabled}>{text}</button>
	<input placeholder={placeholder} size={size} />
  </section>
);
*/

//----------------------------
// Handling events
//-----------------------------

/*
//Arrow Function: const handleClick = () => { ... } is a concise way to define functions in modern JavaScript.
const handleClick = () => {
  console.log("Button clicked!");
};

root.render(
  <section>
	<button onClick={handleClick}>Click me</button>
  </section>
);
*/

//----------------------------
// Mapping collections to elements
//-----------------------------

/*
const array = ["First", "Second", "Third"];
const object = {
  first: 1,
  second: 2,
  third: 3,
};
 
root.render(
  <section>
	<h1>Array</h1>
	<ul>
  	{array.map((i) => (
    	<li key={i}>{i}</li>
))} </ul>
	<h1>Object</h1>
	<ul>
  	{Object.keys(object).map((i) => (
    	<li key={i}>
      	<strong>{i}: </strong>
      	{object[i]}
    	</li>
))} </ul>
  </section>
);
*/
