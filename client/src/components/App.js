import React, { useEffect, useState, createContext } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DocumentLibrary from "./DocumentLibrary"
import "../App.css"
import FileForm from "./FileForm";
import LatestDoc from "./LatestDoc";


export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  const [latestDoc, setLatestDoc] = useState(AppContext)

  useEffect(() => {
    // auto-login
    fetch("/auth")
    .then((r) => {
      if (r.ok) {
        r.json()
    .then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <AppContext.Provider value={{ latestDoc, setLatestDoc}}>
      <div>
      <NavBar user={user} setUser={setUser} />
        <main>
          <DocumentLibrary/>
          <FileForm/>
          <LatestDoc/>
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;