
//----------------------------
// Component Properties
//-----------------------------


// access the props passed to it as a parameter
/*
const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default MyComponent;
*/

// access props using destructuring

const MyComponent = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
</div> );
};

export default MyComponent;
