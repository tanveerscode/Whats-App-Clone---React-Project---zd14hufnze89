import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { SearchContainer, InputHolder } from "./ContactListComponent";
import Picker from "emoji-picker-react";
import { getTime } from "../logic/whatsapp"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  background: #ededed;
  padding: 10px;
  align-items: center;
`;


const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
  margin-left:20px;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  background: #C0C0C0;
  padding: 10px;
  align-items: center;
  margin-bottom: 8px;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background: #C0C0C0;
  ::-webkit-scrollbar{
    display:none;
  }
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-start" : "flex-end")}; 
  margin: 10px 30px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "white" : "#daf8cb")};
  padding: 5px 8px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;
const AddedOn = styled.div`
text-align:right;
color:grey;
font-size:11px;
`;
const Scrol = styled.div`
`;
const Profiledetails = styled.div`
display:flex;
flex-direction: row;
background: #ededed;
align-items: center;
`;

const Utils = styled.div`
width:100px;
display:flex;
justify-content:space-evenly;

`;
const SendBox = styled.div`
  cursor:pointer;
  background-color:green;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:10px;
  margin-right:10px;
  width:44px;
  height:40px;
  border-radius:50%;
  :hover{
    background-color:#47d147;
  }
`
function ConversationComponent(props) {
  const { selectedChat } = props;
  const [text, setText] = useState();
  const [pickerVisible, togglePicker] = useState(false);
  const [message, setMessageList] = useState(selectedChat.messageList);
  const bottomRef = useRef(null);


  const SortMesgList = (contactList) => {
    contactList.sort((a, b) => new Date(b.lastTextTime) - new Date(a.lastTextTime));
   
    localStorage.setItem('data', JSON.stringify(contactList));
  }

  const onEmojiClick = (event, emojiObj) => {
    setText(text + emojiObj.emoji);
    togglePicker(false);
  };
  var contactList1 = JSON.parse(localStorage.getItem('data'));

  //when enter button clicked mesg appeneded in chatlist.
  const onEnterPress = (event) => {
    if (event.key === "Enter" && text !== "") {
      let persn = contactList1.find((person) => person.id === selectedChat.id)
      const messages = [...message];

      messages.push({
        messsageType: "TEXT",
        text,
        senerID: 0,
        addedOn: getTime(),
      });
      persn.lastTextTime = new Date();
      persn.lastText = text;
      persn.messageList = messages;
      setMessageList(messages);

      SortMesgList(contactList1);
      console.log(contactList1)
      setText("");
      props.setlast(props.lastMsg + 1);

    }
  };
// below fun called when click on send icon instead of enter button.
  const onEnterPress1 = () => {

    if (text !== "") {
      let persn = contactList1.find((person) => person.id === selectedChat.id)
      const messages = [...message];

      messages.push({
        messsageType: "TEXT",
        text,
        senerID: 0,
        addedOn: getTime(),
      });
      persn.lastTextTime = new Date();
      persn.lastText = text;
      persn.messageList = messages;
      setMessageList(messages);
      SortMesgList(contactList1);
      console.log(contactList1)
      setText("");
      props.setlast(props.lastMsg + 1);

    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "instant",
    });
  }, [message]);



  useEffect(() => {
    setMessageList(selectedChat.messageList);
  }, [selectedChat]);

  return (
    <Container>
      <ProfileHeader>
        <Profiledetails>
          <ProfileImage src={selectedChat.profilePic} />
          <ContactName>{selectedChat.name}</ContactName>
        </Profiledetails>
        <Utils>
          <SearchIcon />
          < MoreVertIcon />
        </Utils>
      </ProfileHeader>

      <MessageContainer>
        {message.map((messageData) => (
          <MessageDiv key={Math.random() * 10} isYours={messageData.senderID === 0}>
            <Message key={Math.random() * 10} isYours={messageData.senderID === 0}>
              {messageData.text}
              <AddedOn>{messageData.addedOn}</AddedOn>
            </Message>
            <Scrol ref={bottomRef} />
          </MessageDiv>
        ))}
      </MessageContainer>

      <ChatBox>
        <SearchContainer>
          {pickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={onEmojiClick}
            />
          )}
          <EmojiImage
            src={"../happy.png"}
            onClick={() => togglePicker(!pickerVisible)}
          />
          <InputHolder
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchContainer>
        <SendBox onClick={onEnterPress1}>
          < SendIcon />
        </SendBox>

      </ChatBox>
    </Container>
  );
};
export default ConversationComponent;