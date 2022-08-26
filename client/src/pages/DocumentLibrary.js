import React, { useEffect, useState } from "react";
import DocumentCard from "../components/DocumentCard";
import SearchBar from "../components/SearchBar";
import { Button} from "../styles";
// import styled from "styled-components";
// import {useNavigate} from 'react-router-dom';

function DocumentLibrary({document, setDocument}){

    const [documents, setDocuments] = useState([])
    const [errors, setErrors] = useState([])
    // const navigate = useNavigate();
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
          }, 200);
    return () => clearTimeout(timer)
        }, [])


    const filteredDocs = documents.filter(docs=>       
        docs.title?.toLowerCase().includes(search.toLowerCase())||
        docs.content?.toLowerCase().includes(search.toLowerCase())
        ) 
    

    let displayed_documents = filteredDocs.map( (doc) => {
        return <DocumentCard document = {doc} setDocument = {setDocument} image_url = {doc.image_url}
        content={doc.content} title={doc.title} key={doc.id} id = {doc.id} updated_at={doc.updated_at} handleRemove={handleRemove} />
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
                console.log(data)
              setErrors([])
            })
        } else {
          res.json()
          .then(({errors}) => setErrors(errors))
        }
      })}

console.log(handleSubmit)
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
{/* <form onSubmit= {(e) => {
    handleSubmit(e)
    navigate('/editor', {replace: true})}} >
        

       <button className ="card" type="submit">Upload Doc</button>
  </form> */}
export default DocumentLibrary