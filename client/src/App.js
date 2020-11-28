import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading.js";

function App() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <main className="App">
        <Loading />
      </main>
    );
  }
  return (
    <div className="App">
      <h1 className="App-title">Snake Rivals</h1>
    </div>
  );
}

export default App;
