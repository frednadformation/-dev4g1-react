import React, {useEffect, useState} from 'react'

import axios from 'axios'

function ImageUpload() {

    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = event =>{
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const handleSubmit = event =>{
        event.preventDefault(); //empeche soumission formulaire
        //Si il y a une image à envoyer :
        if(selectedFile){
            const formData = new FormData();
            formData.append('image', selectedFile);
            axios.post('http://localhost:5000/uploadimage', formData)
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>image :</label>
            <input type='file' onChange={handleFileChange}/>

            <input type='submit' value="envoyer" />
        </form>
    </div>
  )
}

export default ImageUpload