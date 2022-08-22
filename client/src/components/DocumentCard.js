import React from "react";

//This is a thumbnail 
function DocumentCard({documents, setDocument, setFocus, content,id, title}){
    let format_content = content.length < 50 ? content : content.slice(0,50)

    function handleClick(){
        setFocus(true)
        setDocument(documents[id-1])
    }

    return(
        <div className="card" onClick = {handleClick}>
            <h1>{title}</h1>
            <p>{format_content}</p>
        </div>
    )
}

export default DocumentCard