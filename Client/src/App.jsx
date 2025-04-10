import { Fragment } from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4100");
    setInfo(response.data.blogPost);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center gap-10 flex-col bg-grey-100 text-white">
        <h1 className="text-2xl text-amber-200 font-bold">
          Backend and Frontend Connection [react + (Node.js + Express)]
        </h1>

        <ul className="rounded-2xl p-4 bg-orange-200 space-y-7 shadow-lg ">
          {info.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-white text-black p-4 rounded-lg transition-transform transform hover:scale-105"
              >
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="text-sm font-light">{item.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
