import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/userContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import LoggedIn from "./components/LoggedIn";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PesonList from "./components/PesonList";
import Counter from "./components/state/Counter";
import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   second: "Wayne",
  // };

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     second: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     second: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     second: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name={"Azim"} messgeCount={21} isLogin={true} />
      <Person name={personName} />
      <PesonList names={nameList} /> */}
      {/* <Status status="error" /> */}
      {/* <Heading>Placeholder your name.</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio!</Heading>
      </Oscar> */}
      {/* <Button
        handleClick={(event, id) => console.log("Button clicked!", event, 1)}
      /> */}
      {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Container style={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn /> */}
      {/* <Counter /> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
