import React from "react";
type GreetProps = {
  name: string;
  messgeCount: number;
  isLogin: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogin
          ? `Welcome ${props.name}! You have ${props.messgeCount} unread messages.`
          : "Welcome, Guest"}
      </h2>
    </div>
  );
};

export default Greet;
