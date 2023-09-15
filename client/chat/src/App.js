import ChatContainer from "./components/ChatContainer.js";


function App() {
  return (
    <div style={{backgroundColor: "#ece5dd" , maxHeight:"100%" , padding:10}} >
      <ChatContainer/>
    </div>
  );
}

export default App;






// import ChatBoxReciever, { ChatBoxSender } from "./components/ChatBox.js";
// import InputText from "./components/InputText.js";

// function App() {
//   return (
//     <div style={{backgroundColor: "#ece5dd" , height:"100vh"}} >
//       <h1>Welcome to AgriChat</h1>
//       <ChatBoxReciever user="VegeFarmer" avatar="https://picsum.photos/200/300?grayscale" message="Hello is this the extention officer?"/>
//       <ChatBoxSender user="AgriOfficer" avatar="https://picsum.photos/id/1/367/267" message="Yes How are you doing?"/>
//       <InputText addMessage={(message)=>console.log(message.message)} />
//     </div>
//   );
// }

// export default App;
