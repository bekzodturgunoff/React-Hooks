import React, {useState, useEffect} from "react";



export default function UseMemo() {

  const [data, setData] = useState()



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




  return <div>{findLongestName(data)} </div>;
}
