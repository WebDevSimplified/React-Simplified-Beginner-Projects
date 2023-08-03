import { useState } from "react";
import UserCard from "./UserCard";
import data from "./user.json";

function App() {
  return (
    <>
      <UserCard {...data} />
    </>
  );
}

export default App;
