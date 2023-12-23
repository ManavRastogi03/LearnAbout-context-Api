import React, { useState,useEffect } from 'react'
function Github() {
    
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/ManavRastogi03')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[]);
  return (
    <div className='text-center m-4 bg-grey-700 text-black p-4 text-3xl '>Github Follower: {data.followers}
    <br/>
    <img src={data.avatar_url} alt="Git-Picture" />
    </div>
  )
}

export default Github
