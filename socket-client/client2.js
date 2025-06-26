import { io } from "socket.io-client";

const socket=io("http://localhost:8000")


socket.on("connect",()=>{
    console.log("connected to server",socket.id)

    socket.emit("chat-message",{
        // user:"Pranjal",
        // message:"I am Pranjal"
        user:"aastha",
        message:"i am aas"
    })  

});
 
socket.on("custom-error",(err)=>{
    console.log("error from server")
    process.exit(1);
}) 
 
socket.on("chat-message",(data)=>{
    console.log("msg receicve",data)
})

socket.on("disconnect", () => {  
  console.log(" Disconnected from server 2");
});
  
socket.on("connect_error", (err) => {
  console.error(" Connection error:", err.message);
});