import React from "react";

function DocumentCard({image_url, content, title, updated_at}){

    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{updated_at}</p>
            <img hidden src={image_url} alt={'loaded doc'} />
        </div>
    )
}

export default DocumentCard