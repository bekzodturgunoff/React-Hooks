import React, {useState, useEffect} from "react";

export default function UseMemo() {
  const [data, setData] = useState()
  const [toggle, setToggle] = useState(false)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  const findLongestName = (comments) => {
    if(!comments) return null
    let longestName = " "
    for (let i =0; i < comments.length ; i++ ){
      let currentName = comments[i].name
      if(currentName.length > longestName.length){
        longestName = currentName
      }
    }
    console.log("THIS WAS COMPUTED")
    return longestName
  }

  function make(){
    setToggle(prev=>!prev)
  }

  return <div>{findLongestName(data)} 
  <button onClick={make}>Toggle</button>
  {toggle && <h1>Toggle</h1>}
  </div>;
}
