import React from 'react';

// BEE GIF
import Bee from '../../assets/1642900098_369299_gif-url.gif';

const NotFound = () => {
  return (
    <div style={{height: "100vh" , display:"flex", justifyContent:"center" , alignItems:"center"}}>
        <p style={{fontSize: "35px" , marginLeft: "20px"}}>
            متأسفانه صفحه ای که دنبالشی وجود نداره
        </p>
        <img src={Bee} alt="زنبور منتظر" style={{height: "250px"}} />
    </div>
  )
}

export default NotFound;