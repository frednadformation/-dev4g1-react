import React, {useState} from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

function NewBlogImage() {
    const [file, setFile] = useState(null);

    const [titre, setTitre] = useState('');

    const [description, setDescription] = useState('');

    const [datePublication, setDatePublication] = useState('');

    const navigate = useNavigate();

    const handleFileChange = event =>{
        setFile(event.target.files[0]);
    }

    const handleTitreChange = event =>{
        setTitre(event.target.value);
    };
    const handleDescriptionChange = event =>{
        setDescription(event.target.value);
    };

    const handleDateChange = event =>{
        setDatePublication(event.target.value);
    };
    
    const handleSubmit = event =>{
        event.preventDefault();

        if(file && titre && description) {
            const formData = new FormData();
            formData.append('image',  file);
            formData.append('titre', titre);
            formData.append('description', description);
            formData.append('datePublication', datePublication)

            axios.post("http://localhost:5000/addblog", formData)
            .then((response) => {
                console.log(response);
                alert(response.data);
                navigate('/allblogs');

            })
            .catch((error) => {
                console.log(error.message);
            });

        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>image :</label>
            <input type='file' onChange={handleFileChange} />

            <label>Titre</label>
            <input type='text' onChange={handleTitreChange} />

            <label>Date publication</label>
            <input type='date' onChange={handleDateChange} />

            <label>Description</label>
            <textarea onChange={handleDescriptionChange}>
            </textarea>
            <input type='submit' />
        </form>
    </div>
  )
}

export default NewBlogImage