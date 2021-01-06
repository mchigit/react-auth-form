import React from "react";
import "./App.css";
import AuthForm from "react-auth-form";

function App() {
  return (
    <div className="App">
      <AuthForm firebaseConfig="test" />
    </div>
  );
}

export default App;
