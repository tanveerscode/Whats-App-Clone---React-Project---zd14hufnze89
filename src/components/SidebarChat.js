import React from 'react'
import { Avatar } from '@material-ui/core'
import { useState ,useEffect } from 'react'
import { db } from '../Firebase';
 
// const SidebarChat(id,name){
//       const [seed, setSeed] = useState("");
//     useEffect(()=>{
//         setSeed(Math.floor(Math.random() * 5000))
//     },[])
//       //const {userData} = props;
//         return (
//           <div className='contactList'>
//           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
//           <div className='contactList_info'>
//           {/* //<h2>{userData.name}</h2> */}
//           <h2>khushnudi</h2>
//           {/* <p>{userData.lastText}</p> */}
//           <p>hello</p>
//           </div>
//           {/* <div className='timeSpan'>
//             <span className='lastSeen'>{userData.lastTextTime}</span>
//           </div> */}
//         </div>
//         );

// };
function SidebarChat({id,name,addnewchat}) {

  const [seed, setSeed] = useState("");
const [lastmessage, setLastMessage] = useState("");
  useEffect(()=>{
      setSeed(Math.floor(Math.random() * 5000));
   
  },[])
  const createChat=()=>{
    const room = prompt("Please enter room name.");
   if(room)
        {
             db.collection("rooms").add({
             name:room
       })
   }
}
  return (
      !addnewchat ? (
                  <div className="contactList">
                  <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                  <div className="contactList_info">
                      <h2>{name}</h2>
                      <p>hello</p>
                  </div>
                  </div>
          
      ) :(
      <div className="contactList" onClick={createChat}>
          <h2>Add New Chat</h2>
      </div>
  )
  )
}

export default SidebarChat
