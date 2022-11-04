import React, { useState } from 'react'
let emoji_obj = {
  "😀":"smile!",
  "😁":"Ha ha Ha ha ",
  "😍":"loving emoji",
  "🤩":"glittery eyes excited",
  "😙":"kiss",
  "🤣":"ROFL"
}
let array_emoji = Object.keys(emoji_obj)
const Emoji = () => {
  const [state,setState] = useState("");
  const [emoji,setEmoji] = useState("");
 

  const changeHandler = (e) => {
    let x = emoji_obj[e.target.value];
    console.log(x);
    if(x == undefined){
      setEmoji("data not present")
    }else{
      setEmoji(emoji_obj[e.target.value]);
    }
  }
  const clickHandler = (emoji) => {
    setEmoji(emoji_obj[emoji])
  }

  return (
    <div>
      <h1>Emoji builder</h1>
      <input type="text" name="" id="" onChange={changeHandler}/>
      <div style={{marginTop:"10px"}}>
        {
          array_emoji.map((data)=>{
            return <span onClick={()=>clickHandler(data)}>{data}</span>
          })
        }
      </div>
      <p style={{fontSize:"24px",color:"red"}}>{emoji}</p>
    </div>
    
  )
}

export default Emoji;