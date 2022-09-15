import React from "react";
import { useNavigate } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';




function FolderCard({document,folder,setFolder,id}){


    let name = folder ? folder.name : 'Create new folder'

    const navigate = useNavigate()

    function handleClick(){
        setFolder(folder)
        navigate('/directory')
    }  


      function handleDragEnter(e){
        e.preventDefault();

      }

      function handleOnDrop(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        setFolder=(folder)
        fetch(`/documents/${document.id}`,{
            method: "PATCH",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "folder_id": `${folder.id}`,
            })
          })
      }

      function handleMakeFolder(){
        fetch('/folders', {
          method: 'POST',
          body: JSON.stringify({
            "name": `Enter a Name`
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
        <div className="folder" onClick = {handleMakeFolder}> <MaterialIcon icon="folder" /></div>}
      </div>
    )
}

export default FolderCard