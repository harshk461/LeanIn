import React, { useState } from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'
import './search.css'
import logo from '../../assets/MataJi.png'
export default function Search() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgURL, setimgURL] = useState(null);
    const [english, setEnglish] = useState('');
    const [hindi, setHindi] = useState('');
    const [recipe, setRecipe] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const fileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
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
        await fetch('https://mataji.onrender.com/upload', requestOption)
            .then(res => res.json())
            .then(data => {
                setEnglish(data['sucess'][0]);
                setHindi(data['sucess'][1]);
                setRecipe(data["sucess"][1]);
                setLink1(data["links"][0]);
                setLink2(data["links"][1]);
            })
        const res_window = document.getElementById('result');
        res_window.classList.remove('hidden');
    }
    return (
        <div className="body">
            <Navbar />
            <div className="search-body">
                <div className="search-form">
                    <img src={logo} />
                    <p>Simply upload a picture of the pulse in question.
                        Our website uses state-of-the-art machine learning algorithms to analyze the image and provide a prediction of the type of pulse.</p>
                    <input type="file" placeholder='Choose File' onChange={fileChangeHandler} />
                    <button onClick={handleSubmit}>Predict</button>
                </div>
                <div className="result hidden" id='result'>
                    <img src={imgURL} />
                    <div className="name">
                        <h3 className="english">English: {english}</h3>
                        <h3 className="hindi">Hindi: {hindi}</h3>
                    </div>
                    <div className="recipe">
                        <h2>How to Make {recipe} ?</h2>
                        <div className="links">
                            <a href={link1}>1. {link1}</a>
                            <a href={link2}>2. {link2}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
