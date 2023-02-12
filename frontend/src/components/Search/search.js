import React, { useState } from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import './search.css'

export default function Search() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgURL, setimgURL] = useState(null);

    const fileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name,
        );
        console.log(formData);
        const requestOption = {
            method: "POST",
            Headers: {
                'Content-Type': 'application/json',
            },
            body: formData,
        }
        setimgURL(URL.createObjectURL(selectedFile));
        fetch('http://127.0.0.1:5000/upload', requestOption)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="body">
            <Navbar />
            <div className="search-body">
                <div className="search-form">
                    <input type="file" name="image" id="image" onChange={fileChangeHandler} />
                    <button onClick={handleSubmit}>Predict</button>
                    <img src={imgURL} alt="test" className='test_img' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
