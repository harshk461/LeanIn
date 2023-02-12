import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import '../Blog/blog.css'
import logo from '../../assets/MataJi.png'
import { FaMailBulk, FaPhone, FaLocationArrow } from 'react-icons/fa'

export default function Blog() {
    return (
        <div className="body">
            <Navbar />
            <div className="blog-window" >
                <div className="header">
                    <h3>Stay up to date with the latest Leaf news.</h3>
                    <h5>The farm data ecosystem of the future</h5>
                </div>
                <div className="blog-section">
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_402.png?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Farm data:catalyst for agribussiness in 2023</h4>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum necessitatibus, beatae assumenda maiores fugiat nostrum.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_031.jpg?auto=format&h=220&w=400&fit=crop 1x" alt="" />
                        <div className="blog-data">
                            <h4>Turning Farm Management Data into Carbon Credits</h4>
                            <h6>Leaf helps partners lower the amount of time and money they spend on gathering and submitting data for carbon credit programs.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_402.png?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Farm data:catalyst for agribussiness in 2023</h4>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum necessitatibus, beatae assumenda maiores fugiat nostrum.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_031.jpg?auto=format&h=220&w=400&fit=crop 1x" alt="" />
                        <div className="blog-data">
                            <h4>Turning Farm Management Data into Carbon Credits</h4>
                            <h6>Leaf helps partners lower the amount of time and money they spend on gathering and submitting data for carbon credit programs.</h6>
                        </div>
                    </div>
                    <div className="blog">
                        <img src="	https://leaf.imgix.net/img/hubspot/leaf_130.jpg?auto=format&h=220&w=400&fit=crop" alt="" />
                        <div className="blog-data">
                            <h4>Keep It Clean</h4>
                            <h6>Why it's important to keep ag data 'clean' and how Leaf can help.</h6>
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
                        <a href="/search"><button>Try Now!</button></a>
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
