import React, { useState } from "react";

const Messages = () => {
  // Initialize conversations state
  const [conversations, setConversations] = useState([
    {
      id: 1,
      contact: "Customer 1",
      messages: [
        {
          id: 1,
          sender: "Customer 1",
          message: "Hi, I'm interested in your products.",
        },
        { id: 2, sender: "You", message: "Sure, how can I assist you?" },
      ],
    },
    {
      id: 2,
      contact: "Customer 2",
      messages: [
        {
          id: 3,
          sender: "Customer 2",
          message: "Hello, do you have any discounts?",
        },
        {
          id: 4,
          sender: "You",
          message: "Yes, we have some great discounts available.",
        },
        {
          id: 5,
          sender: "Customer 2",
          message: "That sounds good. Can you tell me more?",
        },
      ],
    },
    // Add more conversations here
  ]);

  // State to track the selected conversation and user's message
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  // Function to handle conversation selection
  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
  };

  // Function to handle user message input
  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Function to send a new message
  const handleSendMessage = () => {
    if (userMessage.trim() === "") {
      return; // Don't send empty messages
    }

    const newMessage = {
      id: selectedConversation.messages.length + 1, // Generate a unique ID
      sender: "You",
      message: userMessage,
    };

    // Update the messages for the selected conversation
    setSelectedConversation({
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMessage],
    });

    // Clear the user message input
    setUserMessage("");
  };

  return (
    <div className="md:w-3/4 pl-4 mr-8 container mx-auto items-center bg-white rounded-lg mt-2 p-4 shadow-md">
      <div className="max-w-full flex">
        {/* Conversation list */}
        <div className="w-auto flex-grow bg-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Conversations</h2>
          <ul>
            {conversations.map((conversation) => (
              <li
                key={conversation.id}
                onClick={() => handleConversationSelect(conversation)}
                className={`cursor-pointer p-2 ${
                  selectedConversation === conversation ? "bg-blue-200" : ""
                }`}
              >
                {conversation.contact}
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation messages */}
        <div className="w-2/3 p-4">
          {selectedConversation ? (
            <div>
              <h2 className="text-xl font-semibold">
                Conversation with {selectedConversation.contact}
              </h2>
              <div className="bg-gray-100 p-4">
                {selectedConversation.messages.map((message) => (
                  <div key={message.id} className="mb-2">
                    <strong>{message.sender}:</strong> {message.message}
                  </div>
                ))}
              </div>

              {/* User message input */}
              <div className="mt-4">
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Type your message..."
                  value={userMessage}
                  onChange={handleUserMessageChange}
                ></textarea>
                <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              Select a conversation to view the messages.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
