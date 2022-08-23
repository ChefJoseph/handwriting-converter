import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";
import Document from "./Document";

function DocumentLibrary(){

    const [documents, setDocuments] = useState([])
    const [focus, setFocus] = useState(false)
    const [document, setDocument] = useState({"content": "",
"title": ""})
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
        return <DocumentCard documents = {documents} setDocument = {setDocument} setFocus = {setFocus} content={doc.content} title={doc.title} id = {doc.id} key={doc.id} updated_at={doc.updated_at}/>
    })
    
    


    return(
        <div>
            <SearchBar 
// @ts-ignore
            search= {search} setSearch={setSearch}/>
            <div className="library">
                {!focus ? displayed_documents : <Document content = {document.content} title = {document.title}/>}
            </div>
        </div>
    )
}

export default DocumentLibrary