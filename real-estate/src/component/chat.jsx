import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and get the response here
    // Update the 'response' state accordingly
  };

  const startListening = () => {
    setIsListening(true);
    // Implement voice input functionality here
  };

  const insertText = (text) => {
    setUserInput(text);
    // Submit the form to trigger a response
    // You can use the handleSubmit function
  };

  return (
    <div className="container">
      <h1>KissanAI</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label htmlFor="user-input">Enter your Questions:</label>
          <input
            type="text"
            id="user-input"
            name="user_input"
            value={userInput}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit">Send</button>
          <button
            type="button"
            name="voice"
            onClick={startListening}
            className={isListening ? "listening" : ""}
          >
            {isListening ? "Listening..." : "Voice Input"}
          </button>
        </div>
      </form>
      <h2>Kissan GPT Response:</h2>
      <div className="chatbot-response">
        <p>{response}</p>
      </div>
      <h2>Few Questions To Ask:</h2>
      <div className="chatbot-response">
        <ul>
          <li
            onClick={() =>
              insertText("What are the different types of irrigation methods?")
            }
          >
            What are the different types of irrigation methods?
          </li>
          <li onClick={() => insertText("How can I improve soil fertility?")}>
            How can I improve soil fertility?
          </li>
          <li
            onClick={() =>
              insertText(
                "What are the common diseases in crops and their management?"
              )
            }
          >
            What are the common diseases in crops and their management?
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Chat;
