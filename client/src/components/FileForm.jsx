import React, { useContext} from 'react'

import { AppContext } from './App'

function FileForm() {
    const {latestDoc, setLatestDoc} = useContext(AppContext)
    
    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData()

        data.append("document[title]", e.target.title.value);
        data.append("document[image]", e.target.image.files[0]);
        submitToAPI(data)

        }

    function submitToAPI(data) {
        fetch("http://localhost:3000/documents", {
            method: "POST",
            body: data
        })
            .then(r => r.json())
            .then(data => {
                setLatestDoc(data.image_url)
            })
            .catch((error) => console.error(error))
    }


    return(
        <div>
            <h1>File Form</h1>
            <form onSubmit= {(e) => handleSubmit(e)}>
                <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title"/>
                    <br  />
                <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image"/>
                    <br />

                <button type="submit"> Create Doc</button>
            </form>
        </div>
    )
}

export default FileForm