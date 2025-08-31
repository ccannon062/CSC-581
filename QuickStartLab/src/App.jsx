import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "magenta" : "darkgreen" }}>
      {item.title}
    </li>
  ));
  function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

    return <button onClick={handleClick}>Clicked {count} times</button>;
  }
  function MyButton2({ count, onClick }) {
    return <button onClick={handleClick}>Clicked {count} times</button>;
  }
  return (
    <>
      <div>
        <h1>Welcome to my app!</h1>
        <MyButton />
      </div>
      <div>
        <h1>{user.name}</h1>
        <img
          src={user.imageUrl}
          alt={"Photo of" + user.name}
          style={{ width: user.imageSize, height: user.imageSize }}
        />
      </div>
      <div>
        <ul>{listItems}</ul>
      </div>
      <div>
        <h1>Counters that update seperately</h1>
        <MyButton />
        <MyButton />
      </div>
      <div>
        <h1>These update together</h1>
        <MyButton2 count={count} onClick={handleClick} />
        <MyButton2 count={count} onClick={handleClick} />
      </div>
    </>
  );
}
