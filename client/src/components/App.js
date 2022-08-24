import React, { useEffect, useState, createContext } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DocumentLibrary from "./DocumentLibrary"
import "../App.css"
import FileForm from "../pages/FileForm";
// import LatestDoc from "./LatestDoc";


// export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  // const [avatar, setAvatar] = useState(null)

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
      <div>
      <NavBar user={user} setUser={setUser} />
        <main>
          <DocumentLibrary user={user}/>
          {/* <LatestDoc/> */}
        </main>
      </div>
  );
}

export default App;