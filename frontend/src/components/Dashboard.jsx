import { useState } from "react";
import "../App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const customMessage = "Jurix AI: Please provide an answer to the following question: ";
  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post", 
        data: {
          contents: [{ parts: [{ text: customMessage + question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500 h-screen p-3 flex flex-col justify-center items-center">
      <form
        onSubmit={generateAnswer}
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-white py-6 px-4 transition-all duration-500 transform hover:scale-105"
      >
        <a href="https://github.com/Ankit8125" target="_blank" rel="noopener noreferrer">
          <h1 className="text-4xl font-bold text-indigo-500 mb-4 animate-bounce">Jurix AI</h1>
        </a>
        <textarea
          required
          className="border border-gray-300 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-purple-400 focus:shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
          style={{ backgroundColor: "#f0f4ff", color: "#333" }}  // Light background with darker text
        ></textarea>
        <button
          type="submit"
          className={`bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition-all duration-300 ${
            generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={generatingAnswer}
        >
          Find related 
        </button>
      </form>

      {/* Output Box */}
      <div 
        className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg bg-white my-4 shadow-lg transition-all duration-500 transform hover:scale-105" 
        style={{ 
          height: '200px',  /* Fixed height */
          overflowY: 'scroll',  /* Enable vertical scrolling */
          wordBreak: 'break-word'  /* Ensure long words break correctly */
        }}
      >
        <ReactMarkdown className="p-4 text-indigo-600">{answer}</ReactMarkdown>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
