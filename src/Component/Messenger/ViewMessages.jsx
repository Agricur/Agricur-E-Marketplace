import React, { useState } from "react";
import UserImg from "../../Images/userImage.png";

const Messages = () => {
  // Initialize conversations state
  const [conversations, setConversations] = useState([
    {
      id: 1,
      contact: "Customer 1",
      lastMessage: "Hi, I'm interested in your products.",
      timestamp: "2023-07-01 11:50",
      image: UserImg,
      messages: [
        {
          id: 1,
          sender: "Customer 1",
          message: "Hi, I'm interested in your products.",
        },
      ],
    },
    {
      id: 2,
      contact: "Customer 2",
      lastMessage: "That sounds good. Can you tell me more?",
      timestamp: "2023-08-01 14:30",
      image: UserImg,
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

  conversations.sort((a, b) => {
    const timeA = new Date(a.timestamp);
    const timeB = new Date(b.timestamp);
    return timeB - timeA;
  });

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
        <div className="w- bg-[#d9eada] p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Conversations
          </h2>
          <ul>
            {conversations.map((conversation) => (
              <li
                key={conversation.id}
                onClick={() => handleConversationSelect(conversation)}
                className={`cursor-pointer rounded-lg p-2 ${
                  selectedConversation === conversation
                    ? "bg-[#3da749] text-white"
                    : ""
                }`}
              >
                <div className="flex items-center">
                  <img
                    src={conversation.image}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{conversation.contact}</h3>
                      <p
                        className={`text-sm text-gray-500 ${
                          selectedConversation === conversation
                            ? "bg-[#3da749] text-white"
                            : ""
                        }`}
                      >
                        {conversation.timestamp}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-sm text-gray-700 ${
                          selectedConversation === conversation
                            ? "bg-[#3da749] text-white"
                            : ""
                        }`}
                      >
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Conversation messages */}
        <div className="w-2/3 p-4">
          {selectedConversation ? (
            <div>
              <h2 className="text-xl font-semibold mb-2 text-center">
                {selectedConversation.contact}
              </h2>
              <div className="bg-[#d9eada] p-4 rounded-lg">
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
                  className="mt-2 bg-[#3da749] text-white py-2 px-4 rounded hover:bg-[#296b33]"
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
