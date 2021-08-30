import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Images from './Images';
import PText from './PText';

function Banner() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <div className="header__ul">
                                    <a className="home__social-icon" href="https://www.linkedin.com/in/shibu-mishra/" target="blank">
                                        <FaLinkedinIn />
                                    </a>
                                    <a className="home__social-icon" href="https://github.com/Shibumishra" target="blank">
                                        <FaGithub />
                                    </a>
                                    <a className="home__social-icon" href="https://twitter.com/home" target="blank">
                                        <FaTwitter />
                                    </a>
                                    <a className="home__social-icon" href="https://www.facebook.com/shibu.mishra098/" target="blank">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <h1>Hi, I'am <br /> Satyabrat Kumar Mishra</h1>
                                <h1 className="contenedor">
			                       <h5>Front-end developer.<span>&#160;</span></h5>
		                        </h1>
                                <PText />
                                <Link to="/projects">
                                    <button className="btn btn-outline">See my works</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner_img">
                            <Images />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
