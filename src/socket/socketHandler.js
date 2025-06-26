import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const socketHandler=(socket,io)=>{
    
    console.log("new socket connected");
    
    
    socket.on("chat-message",async(data)=>{
        try {
            const {user,message}=data;
            if(!user || !message){
                throw new ApiError(400,"all field required");
            }
            console.log(`received msg=${message} from user=${user}`);
            io.emit("chat-message",new ApiResponse(200,"msg received",{user,message}))
        }
        catch (err) {
        console.log("server error",err.message)
        socket.emit("custom-error",new ApiError(400,"unauthorized action"))
        }
    })

    socket.on("disconnect",()=>{
        console.log("socket disconnected",socket.id)
    })
}
export {socketHandler}