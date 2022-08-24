import React, {useState} from "react";


//This is a thumbnail 
function DocumentCard({document, image_url, setDocument, setFocus, content, title, updated_at}){

    const [showMenu, setShowMenu] = useState(false)

    let format_content = content.length < 50 ? content : content.slice(0,50)

    function handleClick(){
        setFocus(true)
        setDocument(document)
    }

    const handleMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu) 
    } 



    return(
        <div className="card" onClick = {handleClick}>
            <h1>{title}</h1>
            <p>{format_content}</p> 
            <p>{updated_at}</p>
            <img hidden src={image_url} alt={'doc'} />
            <button className= "card-tridecimal"
            onClick = {handleMenu}>&#8285;
            </button>
            {/* {setShowMenu? ( */}
                {/* // <ul>
                //     <li>
                //         Delete
                //     </li>
                // </ul>): null} */}
        </div>
    )
}

export default DocumentCard