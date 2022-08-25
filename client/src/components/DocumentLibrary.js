import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";
import Tiptap from "./Tiptap.jsx";

function DocumentLibrary({focus, setFocus}){

    const [documents, setDocuments] = useState([])

    const [document, setDocument] = useState({"content": "",
"title": ""})


    const [search, setSearch] = useState("")

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
          }, 250);
    return () => clearTimeout(timer)
        }, [])

console.log(documents)

    const filteredDocs = documents.filter(docs=>       
        docs.title.toLowerCase().includes(search.toLowerCase())||
        docs.content.toLowerCase().includes(search.toLowerCase())
        // docs.updated_at.toString().includes(search.toString())
        ) 
    

    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard document = {doc} setDocument = {setDocument} setFocus = {setFocus} image_url = {doc.image_url}
        content={doc.content} title={doc.title} key={doc.id} id = {doc.id} updated_at={doc.updated_at} handleRemove={handleRemove} />
    })
    function handleRemove(doc) {
        // console.log(tran)
        setDocuments(documents.filter(d=> d.id !== doc.id))
      }
    return(
        <div>
            {!focus ? <SearchBar 
// @ts-ignore
            search= {search} setSearch={setSearch}/> : null}
            <br/>
            <br/>
            <div className= {focus ? "library2" : "library"}>
                {!focus ? displayed_documents : <Tiptap document = {document} content = {document.content} title = {document.title} 
                />}
            </div>
             
        </div>
    )
}

export default DocumentLibrary