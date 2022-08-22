import React from "react";

function DocumentCard({content, title}){

    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default DocumentCard