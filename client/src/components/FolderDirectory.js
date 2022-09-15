import React from "react";
import DocumentLibrary from "../pages/DocumentLibrary";
import ContentEditable from 'react-contenteditable'

function FolderDirectory({folder, setDocuments, setDocument}){

    function handleChange(e){
        fetch(`/folders/${folder.id}`,{
            method: "PATCH",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "name": e.target.value.match(/(?<=\>)(?!\<)(.*)(?=\<)(?<!\>)/),
            })
          })
    }


    return(
        <div className="library2">
            <ContentEditable html={`<h1>${folder.name}</h1>`} onChange ={(e) => handleChange(e)} />
            <DocumentLibrary documents = {folder.documents} setDocuments = {setDocuments} search = {''} setDocument = {setDocument} />
        </div>
    )
}

export default FolderDirectory