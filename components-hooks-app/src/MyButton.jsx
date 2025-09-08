//----------------------------
// Passing property values and default...
//----------------------------- 

// access props using destructuring

const MyButton = ({ disabled, text}) => (
  <button disabled={disabled}>{text}</button>
);

export default MyButton;


// Default props
/*
const MyButton = ({ disabled = false, text = "More Buttons" }) => (
  <button disabled={disabled}>{text}</button>
);

export default MyButton;


*/
