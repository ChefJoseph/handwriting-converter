import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Display from "./Display";
import "../App.css"
import FileForm from "../pages/FileForm"; 
import Tiptap from "../components/Tiptap.jsx";
import FolderDirectory from "./FolderDirectory";
// import LatestDoc from "./LatestDoc";


// export const AppContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  const [focus, setFocus] = useState(false)
  const [document, setDocument] = useState({"content": "",
  "title": ""})
  const [documents, setDocuments] = useState([])
  const [folder, setFolder] = useState({"name": ""})
  const [refresh,setRefresh] = useState(false)
  console.log(folder.id)
  
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

  useEffect(() => {
    const fetchData = async () => {
        await fetch("/documents")
        .then( (results) => {
            if (results.ok){
                results.json()
        .then(docs => 
            setDocuments(docs))
        }})}
    const timer = setTimeout(() => {
            fetchData();
          }, 200);
    return () => clearTimeout(timer)
    }, [refresh])

  if (!user) return <Login onLogin={setUser} />;

  console.log(folder)
  return (
      <div>
      <NavBar setFolder = {setFolder} user={user} setUser={setUser}/>
        <main>
          <Routes>
            <Route path="/newdoc" element={<FileForm folder = {folder}/>}/>
    
            <Route exact path="/" element={<Display setRefresh = {setRefresh} documents = {documents} setDocuments = {setDocuments} folder = {folder} setFolder = {setFolder} document = {document} setDocument = {setDocument} focus={focus} setFocus = {setFocus}/>}/>
            
            <Route exact path = "/editor" element = {<Tiptap document = {document} content = {document.content} title = {document.title}/>}/>
            <Route exact path = "/directory" element = {<FolderDirectory setRefresh = {setRefresh} setDocument = {setDocument} documents = {documents} setDocuments = {setDocuments} folder ={folder}/>}/>
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;