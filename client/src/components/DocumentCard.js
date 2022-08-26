import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


//This is a thumbnail 
function DocumentCard({document, id, image_url, setDocument,  content, title, updated_at, handleRemove}){

    let new_title = title.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim()
    let new_content = content.replace(/<[^>]*>/g, ' ').replace(/\s{2,}/g, ' ').trim()

    console.log(new_content)


    const navigate = useNavigate()
    let format_content = new_content.length < 50 ? new_content : new_content.slice(0,50)

    function handleClick(){
        setDocument(document)
        navigate('/editor')
    }

    function handleDelete (id) {
        fetch(`http://localhost:4000/documents/${id}`, {
          method: "DELETE"  
        })
        .then(res => res.json)
        .then(console.log("deleted"))
      }



    return(
        <div className="card" onClick = {handleClick}>
            <h1>{new_title}</h1>
            <p>{format_content}</p> 
            <p>{updated_at}</p>
            <img hidden src={image_url} alt={'doc'} />
            <button className= "card-tridecimal"
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                handleRemove(document)
                handleDelete(id)}}
            >
                &#8285;
            </button>
        </div>
    )
}

export default DocumentCard