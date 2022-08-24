import React, { useContext, useState} from 'react'

// import { AppContext } from './App'

function FileForm() {
    // const {latestDoc, setLatestDoc} = useContext(AppContext)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [errors, setErrors] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        // formData.append("document[title]", e.target.title.value);
        // formData.append("document[image]", e.target.image.files[0]);
        formData.append('image', image)
        formData.append('title', title)

        fetch('/documents', {
            method: 'POST',
            body: formData
          })
          .then(res => {
            if (res.ok) {
              res.json()
                .then(data => {
                  console.log(data)
                  setErrors([])
            
                })
            } else {
              res.json()
              .then(({errors}) => setErrors(errors))
            }
          })
    }
        const handleChangeImage = e => setImage(e.target.files[0])
        const handleChangeTitle = e => setTitle(e.target.value)
    
    // function submitToAPI(data) {
    //     fetch("http://localhost:3000/documents", {
    //         method: "POST",
    //         body: data
    //     })
    //         .then(r => r.json())
    //         .then(data => {
    //             setLatestDoc(data.image_url)
    //         })
    //         .catch((error) => console.error(error))
    // }


    return(
        <div>
            <h1>File Form</h1>
            <form onSubmit= {(e) => handleSubmit(e)}>
                <label htmlFor='title'>Title</label>
                    <input type="text" name="title" id="title" onChange = {handleChangeTitle}/>
                    <br  />
                <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image"  onChange={handleChangeImage}/>
                    <br />

                <button type="submit"> Create Doc</button>
            </form>
        </div>
    )
}

export default FileForm