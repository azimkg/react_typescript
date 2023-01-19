import React from "react";

type PersonProps = {
  name: {
    first: string;
    second: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first}
      {props.name.second}
    </div>
  );
};

export default Person;
