import React, { FC, memo, useEffect, useRef, useState } from 'react'

interface Params {
    login: ()=> void;
    isLoggedIn: boolean;
}

const UserComponent = ({login, isLoggedIn}: Params) => {
    
    const counter = useRef(0);

    useEffect(()=>{
        console.log("New render on UserComponent")
        counter.current = counter.current + 1
    })

  return (
    <div>
         <p>Counter is: {counter.current}</p>
    {isLoggedIn === true && (<>
        <h2>Hi, amir</h2>
        <button onClick={login}>Logout</button>
    </>)}
    {isLoggedIn === false && (<>
        <h2>Please log in.</h2>
        <button onClick={login}>Login</button>
    </>)}
    </div>
  )
}

export default memo(UserComponent)