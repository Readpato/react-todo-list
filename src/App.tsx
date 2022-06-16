import { useState } from "react";
import { Container, Center, Flex } from "@chakra-ui/react";

type City = {
  city: string;
};

let place: string = "world";
// const MyButton = ({}) => <button>Change place</button>;
const MyCityTitle = ({ city }: City) => <h2>A new place to see is {city}</h2>;

function App({}) {
  const [newCity, setNewCity] = useState("Paris");
  return (
    <Container bg={"tomato"} maxW="full" h="calc(100vh)">
      <Flex direction={"column"} alignItems={"center"} justifyItems={"center"}>
        <h1>Hello {place}</h1>
        <button
          onClick={() =>
            setNewCity(newCity === "Paris" ? "Berlin" : "Copenhagen")
          }
        >
          Discover a new place!
        </button>
        {/* <MyButton /> */}
        <MyCityTitle city={newCity} />
      </Flex>
    </Container>
  );
}

export default App;
