import React from "react";
import "./style.css";

export default function App() {
  const [wordsToStorage, setWordsToStorage] = React.useState("");
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
      <input
        type="text"
        onChange={e => onhandleChange(e.target.value)}
        value={wordsToStorage}
        placeholder={!localStorage.getItem("name") && "please enter value to store"}
      />
      {localStorage.getItem("name") && (
          <button onClick={() => onClear()}>Clear from storage</button>
      )}
        <h1>{localStorage.getItem("name") ? localStorage.getItem("name") : ''}</h1>
    </div>
  );
}
