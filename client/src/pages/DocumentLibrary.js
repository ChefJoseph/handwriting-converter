import React, { useEffect, useState } from "react";
import DocumentCard from "../components/DocumentCard";

function DocumentLibrary({documents, setDocuments, search,focus,setDocument, folders}){

    const [errors, setErrors] = useState([])


    const filteredDocs = documents.filter(docs=>       
        docs.title?.toLowerCase().includes(search.toLowerCase())||
        docs.content?.toLowerCase().includes(search.toLowerCase())
      ) 
    

    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard doc = {doc} setDocument = {setDocument} image_url = {doc.image_url}
        content={doc.content} title={doc.title} folders = {folders} key={doc.id} id = {doc.id} updated_at={doc.updated_at} handleRemove={handleRemove} />
    })
    function handleRemove(doc) {
        
        setDocuments(documents.filter(d=> d.id !== doc.id))
      }

    const handleSubmit = (e) => {
        const formData = new FormData()
     
        formData.append('title', "New Title")
        formData.append('content', "Body")

        e.preventDefault()
      fetch('/documents', {
        method: 'POST',
        body: formData
      })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(data => {
              setErrors([])
            })
        } else {
          res.json()
          .then(({errors}) => setErrors(errors))
        }
      })}

    return(
        <div>
            <div className= "library">
                {displayed_documents}
            </div>
             
        </div>
    )
}
export default DocumentLibrary