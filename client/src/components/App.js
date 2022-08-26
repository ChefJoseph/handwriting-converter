import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import DocumentLibrary from "../pages/DocumentLibrary"
import "../App.css"
import FileForm from "../pages/FileForm"; 
import Tiptap from "../components/Tiptap.jsx";
// import LatestDoc from "./LatestDoc";


// export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  const [focus, setFocus] = useState(false)
  const [document, setDocument] = useState({"content": "",
  "title": ""})
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
      <NavBar user={user} setUser={setUser}/>
        <main>
          <Routes>
            <Route path="/newdoc" element={<FileForm />}/>
    
            <Route 
            exact path="/" element={!focus ? <DocumentLibrary document = {document} setDocument = {setDocument} focus={focus} setFocus = {setFocus}/> 
            : 
            <Tiptap document = {document} content = {document.content} title = {document.title}/>}
            />

            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;