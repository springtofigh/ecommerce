import React from 'react';

// LOADING GIF
import Spinner from '../../assets/Eclipse-1s-204px.gif';

const Loading = () => {
  return (
    <div style={{height: "100vh" , display:"flex", justifyContent:"center" , alignItems:"center" , flexDirection:"column"}}>
        <img src={Spinner} alt="download" />
        <h1>
            در  حال  دانلود ...
        </h1>
    </div>
  )
}

export default Loading;