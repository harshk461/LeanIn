import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import './home.css'
import dal from '../../assets/dal.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import logo from '../../assets/MataJi.png'
import { FaMailBulk, FaPhone, FaLocationArrow } from 'react-icons/fa'
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
                                <h3>10 Pulses you should be eating
                                    throughout the year</h3>
                                <p>But how well do you know the pulses you consume?
                                    Read up on our list of some of the top pulses
                                    consumed across the world.</p>
                                <button>Read Now</button>
                            </div>
                        </div>
                        <div className="blogBox">
                            <img src={blog2} alt="blog" />
                            <div className="blog-info">
                                <h3>Health Benefits Of Power-
                                    Packed Pulses</h3>
                                <p>Pulses are a constant ingredient with other spices.
                                    Desserts, curries and other varieties of dishes can make
                                    with different pulses like lentils and peas.</p>
                                <button>Read Now</button>
                            </div>
                        </div>
                        <div className="blogBox">
                            <img src={blog3} alt="blog" />
                            <div className="blog-info">
                                <h3>Introducing Six lesser-known Pulses
                                    and their cooking traditions</h3>
                                <p>Red, green, white, black, brown… name a colour and we
                                    can give you a pulse! And what exactly is a pulse,
                                    you might ask?</p>
                                <button>Read Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="top">
                    <div className="left">
                        <h2>Discover the wonderful
                            world of pulses.</h2>
                        <h1>Happy cooking!</h1>
                    </div>
                    <div className="right">
                        <button>Try Now!</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="bottom">
                    <div className="logo">
                        <img src={logo} alt="Mataji" />
                    </div>
                    <div className="contacts">
                        <div className="contact">
                            <FaMailBulk />
                            <a href="/">hk2152573@gmail.com</a>
                        </div>
                        <div className="contact">
                            <FaPhone />
                            <a href="/">+91 123456789</a>
                        </div>
                        <div className="contact">
                            <FaLocationArrow />
                            <a href="/">Delhi,IN</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
