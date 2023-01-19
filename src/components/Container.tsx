import React from "react";
type ContainerProps = {
  style: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.style}>Text content goes here</div>;
};

export default Container;
