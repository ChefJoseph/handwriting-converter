import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Button, Error, Input, FormField, Label} from "../styles";
import styled from "styled-components";

function FileForm() {
    // const {latestDoc, setLatestDoc} = useContext(AppContext)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      // e.preventDefault()
      
      
        const formData = new FormData()
        // formData.append("document[title]", e.target.title.value);
        // formData.append("document[image]", e.target.image.files[0]);
        formData.append('image', image)
        formData.append('title', title)
        formData.append('content', content)

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
        const handleChangeContent = e => setContent(e.target.value)
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
      <Wrapper>
        <div className = "fileform">
            <h1>Upload Document</h1>
        <form onSubmit= {(e) => {
              handleSubmit(e) 
              navigate('/', {replace: true})}} >
        <FormField>
          <Label htmlFor='title'>Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            autoComplete="off"
            onChange={handleChangeTitle}
          />
        </FormField>
        <FormField>
          <Label htmlFor="content">Content</Label>
          <Input
            type="text"
            id="content"
            name="content"
            onChange = {handleChangeContent}
            autoComplete="off"
          />
        </FormField>
        <FormField>
          <Label htmlFor="image">Image File</Label>
          <Input
            type="file"
            id="image"
            onChange={handleChangeImage}
            autoComplete="off"
          />
        </FormField>
        <FormField>
          <Button type="submit">Upload Doc</Button>
        </FormField>
        <FormField>
            {errors ? errors.map((err) => (
              <Error key={err}>{err}</Error> 
            )) : ""}
        </FormField>
        </form>
        </div>
      </Wrapper>
    )
}
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;
export default FileForm





// import React, { useContext, useState} from 'react'
// import {useNavigate} from 'react-router-dom';
// // import { AppContext } from './App'

// function FileForm() {
//     // const {latestDoc, setLatestDoc} = useContext(AppContext)
//     const [image, setImage] = useState(null)
//     const [title, setTitle] = useState("")
//     const [content, setContent] = useState("")
//     const [errors, setErrors] = useState([])
//     const navigate = useNavigate();
    
//     const handleSubmit = (e) => {
//       // e.preventDefault()
      
      
//         const formData = new FormData()
//         // formData.append("document[title]", e.target.title.value);
//         // formData.append("document[image]", e.target.image.files[0]);
//         formData.append('image', image)
//         formData.append('title', title)
//         formData.append('content', content)

//         fetch('/documents', {
//             method: 'POST',
//             body: formData
//           })
//           .then(res => {
//             if (res.ok) {
//               res.json()
//                 .then(data => {
//                   console.log(data)
//                   setErrors([])
            
//                 })
//             } else {
//               res.json()
//               .then(({errors}) => setErrors(errors))
//             }
//           })
//     }
//         const handleChangeImage = e => setImage(e.target.files[0])
//         const handleChangeTitle = e => setTitle(e.target.value)
//         const handleChangeContent = e => setContent(e.target.value)
//     // function submitToAPI(data) {
//     //     fetch("http://localhost:3000/documents", {
//     //         method: "POST",
//     //         body: data
//     //     })
//     //         .then(r => r.json())
//     //         .then(data => {
//     //             setLatestDoc(data.image_url)
//     //         })
//     //         .catch((error) => console.error(error))
//     // }


//     return(
//         <div>
//             <h1>Add Document File</h1>
//             <form onSubmit= {async (e) => {
//               handleSubmit(e) 
//               navigate('/', {replace: true})}} >
//                 <label htmlFor='title'>Title</label>
//                     <input type="text" name="title" id="title" onChange = {handleChangeTitle}/>
//                     <br  />
//                 <label htmlFor='Content'>Content</label>
//                     <input type="text" name="content" id="content" onChange = {handleChangeContent}/>
//                     <br  />
//                 <label htmlFor="image">Image</label>
//                     <input type="file" name="image" id="image"
//                     onChange={handleChangeImage}  />
//                     <br />

//                 <button type="submit"> Upload Doc</button>
                
//             </form>
//         </div>
//     )
// }

// export default FileForm