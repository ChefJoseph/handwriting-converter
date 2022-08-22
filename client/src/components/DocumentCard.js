import React from "react";

function DocumentCard({content, title}){

    return(
        <div className="Card">
            {title}
            {content}
        </div>
    )
}

export default DocumentCard