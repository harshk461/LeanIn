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
                    <div className="header">Get to Know your Daal with just a picture</div>
                    <div className="sub-header">
                        <p>Welcome to MataJi</p>
                        <br />
                        <p>Are you tired of sifting through countless packets of pulses at your own
                            home trying to determine what's inside?
                            We have a solution for you! Our website uses state-of-the-art machine
                            learning algorithms to predict the name of pulses you upload an image of.
                            Simply snap a photo of the pulse in question and let us do the rest.</p>
                    </div>
                    <div className="buttons">
                        <button>Try Now!</button>
                        <button>Watch a Demo</button>
                    </div>
                </div>
                <div className="left">
                    <img src={dal} alt="dal" />
                </div>
            </div>
        </div>
    )
}
