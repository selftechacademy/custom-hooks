import React, { useState } from "react";
import useCount from "./hooks/useCount";
import useGetUsers from "./hooks/useGetUsers";
import "./App.css";

const playList = ["A", "B"];

function App() {
  const { count, total, onMinusClick, onPlusClick } = useCount(0);
  const { isLoading, users, reload, setReload } = useGetUsers();
  const filteredList = playList.filter((el) => el === "A");
  function renderUsers(users) {
    return (
      <ol>
        {users.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ol>
    );
  }
  return (
    <div className="App">
      <button onClick={onMinusClick}>-</button>
      {count} - {total}
      <button onClick={onPlusClick}>+</button>
      <button onClick={() => setReload(!reload)}>Get Users Again</button>
      {isLoading ? <p>Loading...</p> : renderUsers(users)}
    </div>
  );
}

export default App;
