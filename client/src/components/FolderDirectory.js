import React, {useEffect} from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import DocumentLibrary from "../pages/DocumentLibrary";
import ContentEditable from 'react-contenteditable'
import { useNavigate } from "react-router-dom";


function FolderDirectory({setRefresh, folder, documents, setDocuments, setDocument}){

    const navigate = useNavigate()

    function handleChange(e){
        let parsed = e.target.value.match(/(?<=\>)(?!\<)(.*)(?=\<)(?<!\>)/)
        let parsed_name = parsed ? parsed.length >= 1 ? parsed[0] : 'No Title' : 'No Title'
        fetch(`/folders/${folder.id}`,{
            method: "PATCH",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "name": parsed_name
            })
          })

    }

    function handleDelete(id) {
        fetch(`http://localhost:4000/folders/${id}`, {
          method: "DELETE"  
        })
        .then(res => res.json)
        .then(navigate('/'))
      }
    


    return(
        <div className="library2">
            <ContentEditable html={`<h1>${folder.name}</h1>`} onChange ={(e) => handleChange(e)} /> 
            <MaterialIcon icon="delete" onClick = {() => handleDelete(folder.id)}/>
            <DocumentLibrary setRefresh = {setRefresh} documents = {folder.documents} setDocuments = {setDocuments} search = {''} setDocument = {setDocument} />
        </div>
    )
}

export default FolderDirectory