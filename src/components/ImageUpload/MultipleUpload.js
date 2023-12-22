import axios from 'axios';
import React, { useState } from 'react'

function MultipleUpload() {
    const [selectedFiles, setSelectedFiles ] = useState([]);

    const handleFileChange = event => {
        setSelectedFiles(Array.from(event.target.files))
    }
    const handleSubmit = event => {
        event.preventDefault();
        //Si il y a au moins un fichiers selectionné
        if(selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach(file => {
                formData.append('images', file)
            })
            axios.post('http://localhost:5000/uploadmultiple', formData)
            .then((response) =>{
                console.log(response);
            })
            .catch((error) =>{
                console.log(error.message);
            })
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="file" multiple onChange={handleFileChange} />
            <input type='submit' value="envoyer" />
        </form>
    </div>
  )
}

export default MultipleUpload