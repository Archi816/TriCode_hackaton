import "../aditional_css/Chat.css";
import pic from "../assets/send.svg"
import mic from "../assets/mic.png"
import Message from "./Message";

function Chat()
{
    return(<>
        <div className="containerChat">
            <div className="bodyChat">
                <Message text="bebebe test"/>
            </div>
            <div className="inputMess">
                <button><img src={mic}/></button>
                <input type="text" className="inputText" placeholder="Type a message"/>
                <button><img src={pic}/></button>
            </div>
        </div>
    </>);
}

export default Chat