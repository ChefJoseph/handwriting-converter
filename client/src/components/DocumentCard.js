import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';


function DocumentCard({setRefresh, folders, doc, id, image_url, setDocument,  content, title, updated_at, handleRemove}){
    
    const [menu, setMenu] = useState(false)

    let new_title = title.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim()
    let new_content = content.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim()

    const navigate = useNavigate()
    let format_content = new_content.length < 50 ? new_content : new_content.slice(0,50)

    function handleClick(){
        setDocument(doc)
        navigate('/editor')
    }

    function handleDelete (id) {
        fetch(`http://localhost:4000/documents/${id}`, {
          method: "DELETE"  
        })
        .then(res => res.json)
        .then(console.log("deleted"))
      }

      function handleDragStart(e){
        e.dataTransfer.setData("Text", e.target.id);
        setDocument(doc)
      }

      function handleFolderClick(e){
        e.stopPropagation()
        fetch(`/documents/${doc.id}`,{
            method: "PATCH",
            headers: {
             "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "folder_id": `null`,
            })
          })
          .then(() => {setRefresh(state => !state)})
      }


    return(
        
        <div className="card" onClick = {handleClick} draggable = {true} onDragStart = {handleDragStart}>
            <h1>{new_title}</h1>
            <p>{format_content}</p> 
            <p>{updated_at}</p>
            <img hidden src={image_url} alt={'doc'} />
            <button className= "card-tridecimal"
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setMenu(true)
                handleRemove(doc)
                handleDelete(id)
            }}
            >
                <MaterialIcon icon="delete" />
            </button>
            {doc.folder_id ? <button className= "card-tridecimal2" onClick={(e) => handleFolderClick(e)}>
                <MaterialIcon icon="folder" />
            </button> : null}
        </div>
    )
}

export default DocumentCard