
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";


const reactDescriptions = ["Fundamental", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

  const des = reactDescriptions[genRandomInt(2)]; //with the index being the highest value, pick at random
  return (
    <header>
      <img src={reactImg} />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build with {des} react!
      </p>
    </header>
  );
}

