import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";
import Document from "./Document";

function DocumentLibrary(){

    const [documents, setDocuments] = useState([])
    const [focus, setFocus] = useState(false)
    const [document, setDocument] = useState({"content": "",
"title": ""})

    useEffect(() => {
        // getting all documents
        fetch("/documents")
        .then( (results) => {
            if (results.ok){
                results.json()
                .then(docs => setDocuments(docs))
            }
        })}, [])

    
    let displayed_documents = documents.map( (doc) => {
        return <DocumentCard documents = {documents} setDocument = {setDocument} setFocus = {setFocus} content = {doc.content} title = {doc.title} id = {doc.id} key = {doc.id}/>
    })


    return(
        <div>
            <SearchBar/>
            <div className="library">
                {!focus ? displayed_documents : <Document content = {document.content} title = {document.title}/>}
            </div>
        </div>
    )
}

export default DocumentLibrary