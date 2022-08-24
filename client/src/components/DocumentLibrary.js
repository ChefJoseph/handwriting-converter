import React, { useEffect, useState } from "react";
import DocumentCard from "./DocumentCard";
import SearchBar from "./SearchBar";
import Tiptap from "./Tiptap.jsx";

function DocumentLibrary(){

    const [documents, setDocuments] = useState([])
    const [focus, setFocus] = useState(false)
    const [document, setDocument] = useState({"content": "",
"title": ""})

console.log(documents)

    const [search, setSearch] = useState("")
    useEffect(() => {
        // getting all documents
        fetch("/documents")
        .then( (results) => {
            if (results.ok){
                results.json()
                .then(docs => {
                    setDocuments(docs)
                    console.log(docs)}
                   )
            }
        })}, [])

    const filteredDocs = documents.filter(docs=>       
        docs.title.toLowerCase().includes(search.toLowerCase())||
        docs.content.toLowerCase().includes(search.toLowerCase())||
        docs.updated_at.toLowerCase().includes(search.toLowerCase())
        )  
    

    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard document = {doc} setDocument = {setDocument} setFocus = {setFocus} image_url = {doc.image_url}
        content={doc.content} title={doc.title} key={doc.id} updated_at={doc.updated_at}/>
    })

    return(
        <div>
            {!focus ? <SearchBar 
// @ts-ignore
            search= {search} setSearch={setSearch}/> : null}
            <div className="library">
                {!focus ? displayed_documents : <Tiptap content = {document.content} title = {document.title} />}
            
            </div>
        </div>
    )
}

export default DocumentLibrary