import React from 'react';
import PText from './PText';
import { Link } from 'react-router-dom';

function Myabout() {
    return (
        <div>
            <div className="about_container">
                <div className="aboutSeaction__left">
                    <p>Let me introduce myself</p>
                    <h2>About me</h2>
                    <PText />
                    <div className="aboutSection__buttons">
                        <Link to="/projects">
                          <button className="btn btn-outline">Works</button>
                        </Link>
                        <button className="btn_read_more">Read more</button>
                    </div>
                </div>
                <div className="aboutSecation__right">
                    <img style={{width:"50%"}} src="https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/23270225_1959910250924418_7132276128986477464_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=19026a&_nc_ohc=ep9l71L4ZvoAX84BUCa&_nc_ht=scontent.fccu3-1.fna&oh=f3db318766a21174069482888e62f881&oe=60E4109C" alt="shibu" />
                </div>
            </div>
        </div>
    )
}

export default Myabout
