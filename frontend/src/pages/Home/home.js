import React from 'react'
import Footer from '../../components/Footer/footer'
import Navbar from '../../components/Navbar/navbar'
import './home.css'
import dal from '../../assets/dal.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
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
            <div className="header2">
                <div className="data">
                    <h3>Tired of calling your MATAJI every time you see a
                        Pulse and dont know what to do with it?</h3>
                    <h5>Well, our website can also come to your rescue in
                        such situations. In addition to accurately identifying
                        the pulse, we also provide recipes and cooking tips
                        for each type of pulse. Whether you're in the mood
                        for a hearty stew, a flavorful salad, or a comforting
                        bowl of soup, we have a recipe for you.</h5>
                </div>
            </div>
            <div className="header3">
                <div className="left">
                    <img src={pic1} alt="" />
                </div>
                <div className="center">
                    <h2>Say goodbye to those frustrating moments
                        of culinary confusion and embrace a world
                        of pulse possibilities with MATAJI</h2>
                </div>
                <div className="right">
                    <img src={pic2} alt="" />
                </div>
            </div>
            <div className="blog-header">
                <div className="blog-data">
                    <div className="blog-header">Be sure to check out our Blog Section for
                        the latest in Pulse news and trends</div>
                    <div className="sub-header">
                        Our blog is a great resource for anyone looking to learn more about pulses and how to incorporate them into
                        their diet in new and exciting ways. From informative articles to mouth-watering pulse-based recipes,
                        there's something for everyone in our blog section.
                    </div>
                    <div className="blogs">
                        <div className="blogBox">
                            <img src={blog1} alt="blog" />
                            <div className="blog-info">
                                
                            </div>
                        </div>
                        <div className="blogBox">
                        </div>
                        <div className="blogBox">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
