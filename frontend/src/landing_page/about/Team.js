import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5  border-top'>
                <h1 className='text-center mt-5 '>About the Developer</h1>
            </div>
            <div className='row p-3 mt-5  text-muted' style={{lineHeight:'1.4',fontSize:'1.2em'}}>
                <div className='col-6 text-center'>
                    <img src="media/my_photo.jpeg" style={{borderRadius:"100%", width:"60%"}}/>
                    <h4 className='mt-5'>Kaushlendra Pandey</h4>
                    <h6>Developer : Zerodha Clone</h6>
                </div>
                
                <div className='col-6'>
                    <p>I am Kaushlendra Pandey, an aspiring full-stack web developer passionate about creating modern, user-friendly web applications and continuously improving my technical skills.</p>
                    <p>I built this trading platform clone as an educational project to practice full-stack development, understand real-world application design, and strengthen my frontend and backend concepts.</p>
                    <p>This project reflects my learning journey, practical experience, and interest in developing professional web applications for portfolio growth and future career opportunities.</p>
                    <p>Connect on <a href="https://www.linkedin.com/in/kaushlendra-pandey-730520322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{textDecoration:'none'}}> Linkdin </a>/<a href="https://github.com/Kaushlendra123456" style={{textDecoration:'none'}}> GitHub </a></p>
                   
                </div>
            </div>
        </div>
     );
}

export default Team;