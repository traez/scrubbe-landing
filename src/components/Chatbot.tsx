"use client";
import { useState, useEffect, useRef } from "react";

// Define the structure of our knowledge base items
interface KnowledgeItem {
  title: string;
  content: string;
}

// Define the structure for the knowledge base
interface KnowledgeBase {
  [key: string]: KnowledgeItem;
}

// Define the message structure
interface ChatMessage {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  // State for chat visibility
  const [isOpen, setIsOpen] = useState(false);
  // State for chat messages
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // State for input field
  const [input, setInput] = useState("");
  // State for typing indicator
  const [isTyping, setIsTyping] = useState(false);
  // Reference to chat body for scrolling
  const chatBodyRef = useRef<HTMLDivElement>(null);
  // Track if this is the first time opening the chat
  const firstOpenRef = useRef(true);

  // Scrubbe knowledge base
  const scrubbeKnowledge: KnowledgeBase = {
    about: {
      title: "About Scrubbe",
      content:
        "Scrubbe is an advanced SIEM (Security Information and Event Management) and SOAR (Security Orchestration, Automation and Response) platform designed to help organizations detect, analyze, and respond to security threats in real-time. Our platform integrates with your existing security infrastructure to provide comprehensive visibility and automated response capabilities.",
    },
    features: {
      title: "Key Features",
      content:
        "• Real-time threat detection\n• Automated incident response\n• AI-powered analytics\n• Customizable dashboards\n• Comprehensive log management\n• Compliance reporting\n• Threat intelligence integration\n• Case management workflow",
    },
    documentation: {
      title: "Documentation",
      content:
        "Our comprehensive documentation includes installation guides, API references, integration tutorials, and best practices. Would you like me to direct you to a specific section?",
    },
    pricing: {
      title: "Pricing",
      content:
        "Scrubbe offers flexible pricing plans to suit organizations of all sizes. Our plans include:\n• Starter: For small teams and startups\n• Professional: For mid-sized organizations\n• Enterprise: For large organizations with advanced needs\n\nPlease contact our sales team for detailed pricing information.",
    },
    contact: {
      title: "Contact Us",
      content:
        "You can reach our support team at support@scrubbe.com or call us at (555) 123-4567. Our business hours are Monday to Friday, 9 AM - 5 PM EST.",
    },
    installation: {
      title: "Installation Guide",
      content:
        "Scrubbe can be deployed on-premises or in the cloud. The installation process typically takes 2-4 hours depending on your environment. Our team can provide guided installation services if needed.",
    },
    integrations: {
      title: "Integrations",
      content:
        "Scrubbe integrates with popular security tools including:\n• Firewall solutions (Cisco, Palo Alto, Fortinet)\n• Endpoint protection platforms\n• Cloud service providers (AWS, Azure, GCP)\n• Identity providers\n• Vulnerability scanners\n• Threat intelligence feeds",
    },
    faq: {
      title: "Frequently Asked Questions",
      content:
        "Some common questions about Scrubbe include:\n• How long does implementation take?\n• Is training provided?\n• What kind of support is available?\n• How often are updates released?\n\nWhat specific question can I help you with?",
    },
  };

  // Welcome message when chat is first opened
  const welcomeMessage =
    "Hello! I'm the Scrubbe Assistant. I can help you learn about our SIEM & SOAR platform, navigate documentation, or connect you with our team. How can I assist you today?";

  // Function to add a message to the chat
  const addMessage = (text: string, isUser: boolean = false) => {
    setMessages((prev) => [...prev, { text, isUser }]);
  };

  // Function to show quick links
  const showQuickLinks = () => {
    // Simulate a message asking if the user wants to learn about topics
    addMessage("Would you like to learn about any of these topics?");
  };

  // Function to process user input and generate a response
  const processInput = (input: string): string => {
    // Convert input to lowercase for easier matching
    const lowerInput = input.toLowerCase();

    // Check for keywords in the input
    if (
      lowerInput.includes("about") ||
      lowerInput.includes("what is") ||
      lowerInput.includes("scrubbe")
    ) {
      return scrubbeKnowledge.about.content;
    } else if (
      lowerInput.includes("feature") ||
      lowerInput.includes("capabilities") ||
      lowerInput.includes("what can")
    ) {
      return scrubbeKnowledge.features.content;
    } else if (
      lowerInput.includes("doc") ||
      lowerInput.includes("guide") ||
      lowerInput.includes("manual")
    ) {
      return scrubbeKnowledge.documentation.content;
    } else if (
      lowerInput.includes("price") ||
      lowerInput.includes("cost") ||
      lowerInput.includes("subscription") ||
      lowerInput.includes("plan")
    ) {
      return scrubbeKnowledge.pricing.content;
    } else if (
      lowerInput.includes("contact") ||
      lowerInput.includes("support") ||
      lowerInput.includes("help") ||
      lowerInput.includes("talk to")
    ) {
      return scrubbeKnowledge.contact.content;
    } else if (
      lowerInput.includes("install") ||
      lowerInput.includes("deploy") ||
      lowerInput.includes("setup")
    ) {
      return scrubbeKnowledge.installation.content;
    } else if (
      lowerInput.includes("integrat") ||
      lowerInput.includes("connect") ||
      lowerInput.includes("work with")
    ) {
      return scrubbeKnowledge.integrations.content;
    } else if (
      lowerInput.includes("faq") ||
      lowerInput.includes("question") ||
      lowerInput.includes("common")
    ) {
      return scrubbeKnowledge.faq.content;
    } else if (lowerInput.includes("thank")) {
      return "You're welcome! I'm here if you need any more information about Scrubbe. Is there anything else I can help you with?";
    } else if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
      return "Thanks for chatting! Feel free to come back if you have more questions about Scrubbe. Have a great day!";
    } else {
      return "I'm not sure I understand. Could you rephrase your question about Scrubbe? Or you can ask about our features, documentation, pricing, or how to contact us.";
    }
  };

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    addMessage(input, true);

    // Clear input field
    setInput("");

    // Show typing indicator
    setIsTyping(true);

    // Process response with a delay to simulate thinking
    setTimeout(() => {
      // Hide typing indicator
      setIsTyping(false);

      // Add bot response
      const response = processInput(input);
      addMessage(response);

      // Maybe show quick links
      if (Math.random() > 0.5) {
        setTimeout(() => {
          showQuickLinks();
        }, 800);
      }
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Function to handle clicking a quick link
  const handleQuickLinkClick = (topic: string) => {
    addMessage(topic, true);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      addMessage(processInput(topic));
    }, 1000);
  };

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Show welcome message when chat is first opened
  useEffect(() => {
    if (isOpen && firstOpenRef.current) {
      firstOpenRef.current = false;

      setTimeout(() => {
        addMessage(welcomeMessage);

        setTimeout(() => {
          showQuickLinks();
        }, 500);
      }, 300);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-3 right-3 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        <svg
          className="w-6 h-6 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11c1.52 0 3.13-.276 4.403-.82l4.794 1.414-.993-4.247C21.31 17.372 23 14.734 23 12c0-6.075-4.925-11-11-11zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm3.5-11c.828 0 1.5-.672 1.5-1.5S16.328 7 15.5 7 14 7.672 14 8.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 7 8.5 7 7 7.672 7 8.5 7.672 10 8.5 10zm3.5 6c-2.003 0-3.887-.785-5.303-2.202l-1.405 1.405C7.185 17.097 9.493 18 12 18s4.816-.903 6.707-2.797l-1.405-1.405C15.887 15.215 14.003 16 12 16z" />
        </svg>
      </button>

      {/* Chat dialog box */}
      <div
        className={`absolute bottom-14 right-0 w-full max-w-xs sm:max-w-sm bg-white rounded-lg shadow-xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        style={{
          minWidth: "280px",
          maxHeight: "calc(100vh - 80px)", // Set max height for entire container
        }}
      >
        {/* Chat header - make it sticky */}
        <div className="bg-blue-600 text-white p-2 flex justify-between items-center sticky top-0 z-10">
          <div className="font-semibold flex items-center gap-1 text-sm">
            <svg
              className="w-4 h-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c1.52 0 3.13-.276 4.403-.82l4.794 1.414-.993-4.247C21.31 17.372 23 14.734 23 12c0-6.075-4.925-11-11-11zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
              <circle cx="8.5" cy="10.5" r="1.5" />
              <circle cx="15.5" cy="10.5" r="1.5" />
              <path d="M12 16c-1.654 0-3-1.346-3-3h2c0 .551.448 1 1 1s1-.449 1-1h2c0 1.654-1.346 3-3 3z" />
            </svg>
            Scrubbe Assistant
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl p-1"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        {/* Chat body - adjust max height */}
        <div
          ref={chatBodyRef}
          className="flex-1 p-3 overflow-y-auto flex flex-col"
          style={{ height: "auto" }} // Let it grow naturally within the container
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 max-w-[85%] p-2 rounded-lg text-sm animate-fadeIn ${
                message.isUser
                  ? "bg-blue-600 text-white self-end rounded-br-none"
                  : "bg-slate-100 self-start rounded-bl-none"
              }`}
            >
              {message.text.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-1 p-2 bg-slate-100 rounded-lg w-fit mb-2 self-start">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
            </div>
          )}

          {/* Quick links */}
          {messages.length > 0 &&
            messages[messages.length - 1].text ===
              "Would you like to learn about any of these topics?" && (
              <div className="flex flex-wrap gap-1 mb-2">
                {[
                  "About Scrubbe",
                  "Features",
                  "Documentation",
                  "Contact Us",
                ].map((link) => (
                  <button
                    key={link}
                    onClick={() => handleQuickLinkClick(link)}
                    className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full hover:bg-blue-200 transition-colors mb-1"
                  >
                    {link}
                  </button>
                ))}
              </div>
            )}
        </div>

        {/* Chat footer - make it sticky */}
        <div className="p-2 border-t border-slate-200 flex gap-1 sticky bottom-0 bg-white z-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your question..."
            className="flex-1 px-2 py-1.5 border border-slate-200 rounded focus:outline-none focus:border-blue-600 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-2 rounded hover:bg-blue-700 transition-colors"
            aria-label="Send message"
          >
            <svg
              className="w-4 h-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
