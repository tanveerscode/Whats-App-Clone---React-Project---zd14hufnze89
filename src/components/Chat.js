import { Avatar } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


function Chat() {
  const [roomId] = useParams();
  console.log(roomId);
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/123.svg`}/>
        <div className="chat__headerInfo">
         <h3>room name</h3>
         <p>Last seen...</p>               
        </div>
        <div className="header__right">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faPaperclip}/>
        <FontAwesomeIcon icon={faEllipsisVertical} />           
        </div>

      </div>
      <div className='chat_body'>
        <p className='chat_message chat_reciver'>
           <span className='chat_name'>Sabahat Parveen</span>
           This is a test chat_message
           <span className='chat_time'>7:42 PM</span>
        </p>
        <p className='chat_message chat_reciver'>
           <span className='chat_name'>Sabahat Parveen</span>
           This is a test chat_message
           <span className='chat_time'>7:42 PM</span>
        </p>
        <p className='chat_message '>
           <span className='chat_name'>Sabahat Parveen</span>
           This is a test chat_message
           <span className='chat_time'>7:42 PM</span>
        </p>
      </div>
      <div className='chat_footer'>
        <FontAwesomeIcon icon={faFaceSmile}/>
        <FontAwesomeIcon icon={faPaperclip}/>
        <form>
            <input type="text" value="" placeholder="Type your message"/>
            <input type="submit"/>
        </form>
        <FontAwesomeIcon icon={faMicrophone}/>
      </div>
    </div>
  )
}

export default Chat
