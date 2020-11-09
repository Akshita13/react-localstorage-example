import React from "react";
import "./style.css";

export default function App() {
  const [wordsToStorage, setWordsToStorage] = React.useState("abc");
  const onhandleChange = value => {
    localStorage.setItem("name", wordsToStorage);
    setWordsToStorage(value);
  };
  const onClear = () => {
    localStorage.clear();
    setWordsToStorage("");
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="text" onChange={e => onhandleChange(e.target.value)} value={wordsToStorage}/>
      {localStorage.getItem("name") ? (
        <>
        <h1>{wordsToStorage}</h1>
        <button onClick={() => onClear()}>Clear</button>
        </>
      ) : (
        <h1>{wordsToStorage}</h1>
      )}
    </div>
  );
}
