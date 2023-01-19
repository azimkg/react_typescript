import React from "react";
type NamesProps = {
  names: {
    first: string;
    second: string;
  }[];
};

const PesonList = (props: NamesProps) => {
  return (
    <div>
      {props.names.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.second}
        </h2>
      ))}
    </div>
  );
};

export default PesonList;
