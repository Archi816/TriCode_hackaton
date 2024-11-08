import "../aditional_css/Message.css";

function Message(props)
{
    return(
        <>
            <div className="messageBody">
                <div className="messText">
                    <h2>{props.text}</h2>
                </div>
            </div>
        </>
    );
}

export default Message