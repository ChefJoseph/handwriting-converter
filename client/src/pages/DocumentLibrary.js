import React, { useEffect, useState } from "react";
import DocumentCard from "../components/DocumentCard";
import SearchBar from "../components/SearchBar";


function DocumentLibrary({document, setDocument, focus, setFocus}){

    const [documents, setDocuments] = useState([])


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
          }, 300);
    return () => clearTimeout(timer)
        }, [])


    const filteredDocs = documents.filter(docs=>       
        docs.title.toLowerCase().includes(search.toLowerCase())||
        docs.content.toLowerCase().includes(search.toLowerCase())
        ) 
    

    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard document = {doc} setDocument = {setDocument} setFocus = {setFocus} image_url = {doc.image_url}
        content={doc.content} title={doc.title} key={doc.id} id = {doc.id} updated_at={doc.updated_at} handleRemove={handleRemove} />
    })
    function handleRemove(doc) {

        setDocuments(documents.filter(d=> d.id !== doc.id))
      }
    return(
        <div>
            <SearchBar 
// @ts-ignore
            search= {search} setSearch={setSearch}/>
            <br/>
            <br/>
            <div className= {focus ? "library2" : "library"}>
                {displayed_documents}
            </div>
             
        </div>
    )
}

export default DocumentLibrary