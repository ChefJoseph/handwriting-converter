import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";

function DocumentLibrary(){

    const [documents, setDocuments] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        // getting all documents
        fetch("/documents")
        .then( (results) => {
            if (results.ok){
                results.json()
                .then(docs => setDocuments(docs))
            }
        })}, [])
    
    const filteredDocs = documents.filter(docs=>       
        docs.title.toLowerCase().includes(search.toLowerCase())||
        docs.content.toLowerCase().includes(search.toLowerCase())||
        docs.updated_at.toLowerCase().includes(search.toLowerCase())
        )  
    
    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard content={doc.content} title={doc.title} key={doc.id} updated_at={doc.updated_at}/>
    })


    return(
        <div>
            <SearchBar 
// @ts-ignore
            search= {search} setSearch={setSearch}/>
            <div className="library">
                {displayed_documents}
            </div>
        </div>
    )
}

export default DocumentLibrary