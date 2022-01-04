type greetProps = {
    name:string;
    messageCount? : number;
    isLoggedIn:boolean;
}

export const Greet = (props:greetProps) => {
    const {messageCount = 0} = props;
    return(
        <div>
            {props.isLoggedIn? <h2>Welcome {props.name}! you have 
            {messageCount} unread messages</h2> 
            :<h2>Welcome Guest</h2> }
            
        </div>
    )
}