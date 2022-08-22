import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";

function DocumentLibrary(){

    const [documents, setDocuments] = useState([])

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
        return <DocumentCard content = {doc.content} title = {doc.title} key = {doc.id}/>
    })


    return(
        <div>
            <SearchBar/>
            <div class="library">
                {displayed_documents}
            </div>
        </div>
    )
}

export default DocumentLibrary