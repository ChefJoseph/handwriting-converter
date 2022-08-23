import React from "react";

function DocumentCard({content, title, updated_at}){

    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{updated_at}</p>
        </div>
    )
}

export default DocumentCard