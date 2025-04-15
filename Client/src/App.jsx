import { Fragment } from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";



// Use the API URL from .env or default to localhost for local dev
const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:4100/api"; // Use prod URL or fallback to localhost


//           "Self-discipline is a muscle. Train it daily to achieve your goals and dreams.",

function App() {
  // calling States for Functions
  const [info, setInfo] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showTitle, setShowTitle] = useState("");
  const [showContent, setShowContent] = useState("");
  

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}`);
      console.log(res.data); // Check the structure of the response
      setInfo(res.data); // or setInfo(response.data.blogPost) based on your backend shape
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddPost = async () => {
    try {
        const res = await axios.post(`${baseUrl}/upload`, {
        title: showTitle,
        content: showContent,
      });
      // Update the state with the new post data

      setInfo([...info, res.data]);

      // Clear form fields after adding the post
      setShowTitle("");
      setShowContent("");
      setShowForm(false);  
      
      // Close the form after submission
    } catch (error) {
      console.log(`${error} error`);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center gap-10 flex-col text-white">
        <h1 className="text-2xl text-amber-200 font-bold">
          Backend and Frontend Connection [react + (Node.js + Express)]
        </h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="text-white bg-amber-500 rounded-full p-2"
        >
          + Add Post
        </button>

        {showForm && (
          <div className="p-8 py-6 rounded-2xl shadow-2xl h-auto space-y-8 w-100">
            <input
              type="text"
              placeholder="Enter title"
              value={showTitle}
              onChange={(e) => setShowTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-white  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />

            <textarea
              placeholder="Enter An Idea"
              value={showContent}
              onChange={(e) => setShowContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg text-white placeholder-gray-00 focus:outline-none focus:ring-2 focus:ring-amber-400"
              rows="5"
            />

            <button
              onClick={handleAddPost}
              className="w-full px-4 bg-amber-500 hover:bg-amber-600 hover:border handlePostBtn hover:border-amber-400 focus:outline-none transition-colors duration-300 text-white font-semibold rounded-lg"
            >
              Submit
            </button>
          </div>
        )}

        <ul className="rounded-2xl p-4 shadow-lg flex flex-col lg:flex-row lg:flex-wrap gap-7 ">
          {info.map((item) => {
            return (
              <li
                key={item._id}
                data-id={item._id}
                className="bg-white text-black p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-amber-100 hover:ease-in-out duration-500 w-full lg:w-[30%]"
              >
                <p className="text-xl text-gray-800 font-semibold">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 font-light">
                  {item.content}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
