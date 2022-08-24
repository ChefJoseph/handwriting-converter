import React from "react";

//This is a thumbnail 
function DocumentCard({document, image_url, setDocument, setFocus, content, title, updated_at}){
    let format_content = content.length < 50 ? content : content.slice(0,50)

    function handleClick(){
        setFocus(true)
        setDocument(document)
    }

    return(
        <div className="card" onClick = {handleClick}>
            <h1>{title}</h1>
            <p>{format_content}</p> 
            <p>{updated_at}</p>
            <img hidden src={image_url} alt={'loaded doc'} />
            <span className= "card-tridecimal">&#8285;</span>
        </div>
    )
}

export default DocumentCard