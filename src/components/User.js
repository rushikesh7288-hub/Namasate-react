import { useState, useEffect } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("Naasate React OP");
    // }, 1000);
    // console.log("useEffect");
    // return () => {
    //   clearInterval(timer);
    //   console.log(" return useEffect");
    // };
  }, []);
//   console.log("render");
  return (
    <div className="card">
      <h1>count:-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Incearse
      </button>
      <h1>count1:-{count1}</h1>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Count1 Incearse
      </button>
      <h2>Name:-{props.name}</h2>
      <h3>City:- {props.city}</h3>
      <h4>Contact:- {props.contact}</h4>
    </div>
  );
};
export default User;
