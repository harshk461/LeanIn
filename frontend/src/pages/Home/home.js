import React from 'react'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import './home.css'
import dal from '../../assets/dal.png'
export default function Home() {
    return (
        <div className='body'>
            <Navbar />
            <div className="home-header">
                <div className="right">
                    
                </div>
                <div className="left">
                    <img src={dal} alt="dal" />
                </div>
            </div>
        </div>
    )
}
