import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';

function FolderCard({setRefresh, document,folder,setFolder,id}){

    let name = folder ? folder.name : 'Create New Folder' 

    const navigate = useNavigate()

    function handleClick(){
        setFolder(folder)
        navigate('/directory')
    }  


      function handleDragEnter(e){
        e.preventDefault();
        setFolder(folder)

      }

      function handleOnDrop(event){
        event.preventDefault();
        setFolder(folder)
        var data = event.dataTransfer.getData("Text");
        fetch(`/documents/${document.id}`,{
            method: "PATCH",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "folder_id": `${folder.id}`,
            })
          })
          .then(() => {setRefresh(state => !state)})
      }


      function handleMakeFolder(){
        fetch('/folders', {
          method: 'POST',
          body: JSON.stringify({
            "name": "Enter a Title","documents":[]
          })
        })
        .then(res => {
            res.json()
              .then(data => {
                console.log(data)
              })
        })
      }



    return(
      <div>
        {folder ? <div className="folder" onClick = {handleClick} onDrop = {handleOnDrop} onDragOver = {handleDragEnter}> <MaterialIcon icon="folder" />   <b>{name}</b></div> : 
        <div className="folder" onClick = {handleMakeFolder}> <MaterialIcon icon="create_new_folder" /> <b>{name}</b></div>}
      </div>
    )
}

export default FolderCard