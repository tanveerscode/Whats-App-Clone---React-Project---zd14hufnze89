import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { contactData } from "../mockData";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';

if (!localStorage.getItem('data')) {
  localStorage.setItem('data', JSON.stringify(contactData));
};

let data = JSON.parse(localStorage.getItem('data'));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;
  height: 100%;
  width: 100%;
  border-right: 1px solid #dadada;
  font-family: 'Open Sans', sans-serif;

`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #e1e3e2;
  padding: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;

export const InputHolder = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e1e3e2;
  cursor: pointer;
  background:${(props) => (props.isActive ? "#C0C0C0" : "white")};
  :hover {
    background: #ebebeb;
  }
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;

const ContactName = styled.div`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const MessageText = styled.div`
  width: 300px;
  height:20px;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
  overflow:hidden;
`;

const MessageTime = styled.div`
// background-color:red;
  font-size: 12px;
  margin-right: 10px;
  color:solid rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ProfileIcon = styled(ProfileImage)`
  width: 55px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;
const Icons = styled.div`
width:180px;
display:flex;
justify-content:space-evenly;
`;
const Newmsg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:12px;
  color:white;
  width:20px;
  height:20px;
  border-radius:50%;
  margin-left:10px;
  background-color:green;
`;
const Rightdesc = styled.div`
  width:50px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height:40px;
  margin-right:5px;
`;
const ProfileCard = styled.div`
overflow:scroll;
`;

const ContactComponent = (props) => {
  const { userData, setChat } = props;
  const [newMsg, setNew] = useState(userData?.messageList.length - 1);

  console.log(userData.key);
  return (
    <ContactItem
      onClick={() => {
        setChat(userData);
        setNew("");

      }}
      isActive={props.activeChat && props.activeChat.id === userData.id}
    >
      <ProfileIcon src={userData.profilePic} />
      <ContactInfo>
        <ContactName>{userData.name}</ContactName>
        <MessageText>{userData?.messageList[userData.messageList.length - 1].text}</MessageText>
      </ContactInfo>
      <Rightdesc>

        <MessageTime>{userData?.messageList[userData.messageList.length - 1].addedOn}  </MessageTime>
        {newMsg ? (<Newmsg >{newMsg}</Newmsg>) : ""}
      </Rightdesc>
    </ContactItem>
  );
};


// {userData?.messageList.length-1}
function ContactListComponent(props) {
  
  const [contactList, setcontactList] = useState(data);
  const [search, setSearch] = useState("");
  const [click, setClicked] = useState(false);

  useEffect(() => {
    setcontactList(JSON.parse(localStorage.getItem('data')))
  }, [props.selectedChat]);

  useEffect(() => {
    setcontactList(JSON.parse(localStorage.getItem('data')))
  }, [props.lastMsg]);

  return (
    <Container>
      <ProfileInfoDiv>
        <ProfileImage
          src="/profile/mydp.JPG"
        />
        <Icons>
          <GroupsIcon />
          <DonutLargeIcon />
          < ChatIcon />
          < MoreVertIcon />
        </Icons>
      </ProfileInfoDiv>
      <SearchBox>
        <SearchContainer>
          <SearchIcon />
          <InputHolder placeholder="Search or start new chat" onChange={(event) => setSearch(event.target.value)} />
        </SearchContainer>
      </SearchBox>
      <ProfileCard> 
      {contactList.filter((userData) =>
        userData.name.toLowerCase().includes(search.toLowerCase().trim())).map((userData) => (
          <ContactComponent
            key={userData.id}
            setChat={props.setChat}
            userData={userData}
            setcontactList={setcontactList}
            click={click}
            setClicked={setClicked}
            activeChat={props.activeChat}
          />
        ))}
        </ProfileCard>
    </Container>
   
  );
};

export default ContactListComponent;
