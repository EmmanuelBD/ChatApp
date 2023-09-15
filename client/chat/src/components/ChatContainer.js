import React, { useEffect, useState, useRef } from 'react'
import socketIOClient from "socket.io-client";
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import UserLogin from './UserLogin';



export default function ChatContainer() {
  
    let socketio  = socketIOClient("http://localhost:5000")
    const [chats , setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const avatar = localStorage.getItem('avatar')
    

    useEffect(()=> {
        socketio.on('chat', senderChats => {
            setChats(senderChats)
        })
    })


   

    function sendChatToSocket(chat){
        socketio.emit("chat" , chat)
    }

    function addMessage(chat){
        const newChat = {...chat , user , avatar}
        setChats([...chats , newChat])
        sendChatToSocket([...chats , newChat])
    }

    function logout(){
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")   
    }

    function ChatsList(){
        return( <div style={{ height:'75vh' , overflow:'scroll' , overflowX:'hidden' }}>
              {
                 chats.map((chat, index) => {
                  if(chat.user === user) return <ChatBoxSender  key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                  return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
              })
              }
               {/* <div ref={messagesEndRef} /> */}
        </div>)
       
    }

  return (
    <div>
        {
        user ?
         <div>
        
         <div style={{display:'flex', flexDirection:"row", justifyContent: 'space-between'}} >
          <h4>Username: {user}</h4>
          <strong>AgriChat  <a href='http://www.agrichatuk.org/'> Where farmers meet Agri Officers</a></strong>
          <p onClick={()=> logout()} style={{color:"blue", cursor:'pointer'}} >Log Out</p>
           </div>
            <ChatsList
             />
            
            <InputText addMessage={addMessage} />
        </div>
        : <UserLogin setUser={setUser} />
        }

    {/* <div style={{margin:10 , display:'flex', justifyContent:'center'}} >
    <small style={{backgroundColor:'lightblue' , padding:5 , borderRadius:5}} >Interested in some 1 on 1 Coding Tutorials and Mentorship. Lets chat on Discord: <strong> kutlo_sek#5370 </strong></small>
        
    </div> */}
     
    </div>
  )
}