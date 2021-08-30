import React from 'react'

function Images() {
    return (
        <>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                        <path fill="#FF0066" d="M48.1,-45.8C61.5,-34.7,71,-17.3,70.8,-0.3C70.5,16.8,60.5,33.7,47.1,49.1C33.7,64.4,16.8,78.4,0.5,77.9C-15.9,77.5,-31.8,62.6,-45.5,47.2C-59.3,31.8,-70.9,15.9,-71,-0.1C-71.1,-16,-59.6,-32.1,-45.9,-43.2C-32.1,-54.3,-16,-60.4,0.6,-61C17.3,-61.7,34.7,-56.8,48.1,-45.8Z" transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <image x="-10" y="10" width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref="https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/23270225_1959910250924418_7132276128986477464_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=19026a&_nc_ohc=ep9l71L4ZvoAX84BUCa&_nc_ht=scontent.fccu3-1.fna&oh=f3db318766a21174069482888e62f881&oe=60E4109C" clipPath="url(#user-space)" />
            </svg>
        </>
    )
}

export default Images
