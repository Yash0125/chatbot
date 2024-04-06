import React, { useState } from "react";
import "./FAQChatbot.css";
import { IoClose } from "react-icons/io5";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const FAQChatbot = () => {
  const [userInput, setUserInput] = useState("");
  // eslint-disable-next-line
  const [suggestedArticles, setSuggestedArticles] = useState([]);
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [totalInput, setTotalInput] = useState([]);
  const [storedResults, setStoredResults] = useState([]);

  // Function to handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle user submission
  const handleSubmit = () => {
    // Here you can implement logic to parse the user input and suggest relevant articles
    // For simplicity, let's assume we have predefined keywords and articles
    const keywords = [
      "general",
      "record",
      "profile",
      "link",
      "account",
      "upgrade",
      "email",
      "image",
      "picture",
      " upload",
      "device",
      "microphone",
    ];

    const articles = {
      general: [
        {
          question: "General FAQs",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000526750-general-faqs",
        },
      ],
      record: [
        {
          question: "General FAQs",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000526750-general-faqs",
        },
        {
          question: "How do I change my recording / re-record?",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543148-how-do-i-change-my-recording-re-record-",
        },
        {
          question: "Why can't I record?",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543149-why-can-t-i-record-",
        },
        {
          question: "Why can't I hear anything when I try to record?",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543212-why-can-t-i-hear-anything-when-i-try-to-record-",
        },
        {
          question: "How do I download my name recording?",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543216-how-do-i-download-my-name-recording-",
        },
        {
          question: `How can I record on another device? I have a better microphone on another device`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561707-how-can-i-record-on-another-device-i-have-a-better-microphone-on-another-device",
        },
      ],

      profile: [
        {
          question: "How do I change my profile details?",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543213-how-do-i-change-my-profile-details--",
        },
        {
          question:
            "My profile won't update, even though I've submitted changes",
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543214-my-profile-won-t-update-even-though-i-ve-submitted-changes",
        },
        {
          question: `Why are there crown icons next to "Profile Picture", "Links" etc.`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543215-why-are-there-crown-icons-next-to-profile-picture-links-etc-",
        },
        {
          question: `Where can I find my profile link?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543616-where-can-i-find-my-profile-link-",
        },
      ],

      link: [
        {
          question: `Why are there crown icons next to "Profile Picture", "Links" etc.`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543215-why-are-there-crown-icons-next-to-profile-picture-links-etc-",
        },
        {
          question: `Where can I find my profile link?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543616-where-can-i-find-my-profile-link-",
        },
      ],

      account: [
        {
          question: `How do I delete my account?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000543217-how-do-i-delete-my-account-",
        },
        {
          question: `How do I upgrade my account from Basic to Professional?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561716-how-do-i-upgrade-my-account-from-basic-to-professional-",
        },
      ],
      upgrade: [
        {
          question: `How do I upgrade my account from Basic to Professional?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561716-how-do-i-upgrade-my-account-from-basic-to-professional-",
        },
      ],

      email: [
        {
          question: `How do I get the NameDrop icon image to add to my email signature or website?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561703-how-do-i-get-the-namedrop-icon-image-to-add-to-my-email-signature-or-website-",
        },
        {
          question: `How do I change my email?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000618593-how-do-i-change-my-email-",
        },
      ],

      image: [
        {
          question: `How do I get the NameDrop icon image to add to my email signature or website?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561703-how-do-i-get-the-namedrop-icon-image-to-add-to-my-email-signature-or-website-",
        },
        {
          question: `How do I add a profile picture? Or background picture?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000562241-how-do-i-add-a-profile-picture-or-background-picture-",
        },
      ],
      picture: [
        {
          question: `How do I add a profile picture? Or background picture?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000562241-how-do-i-add-a-profile-picture-or-background-picture-",
        },
        {
          question: `How do I get the NameDrop icon image to add to my email signature or website?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561703-how-do-i-get-the-namedrop-icon-image-to-add-to-my-email-signature-or-website-",
        },
      ],
      upload: [
        {
          question: `Can I upload a name recording?`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000599820-can-i-upload-a-name-recording-",
        },
      ],
      device: [
        {
          question: `How can I record on another device? I have a better microphone on another device`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561707-how-can-i-record-on-another-device-i-have-a-better-microphone-on-another-device",
        },
      ],
      microphone: [
        {
          question: `How can I record on another device? I have a better microphone on another device`,
          url: "https://namedrop.freshdesk.com/support/solutions/articles/73000561707-how-can-i-record-on-another-device-i-have-a-better-microphone-on-another-device",
        },
      ],
    };

    const matchingKeywords = keywords.filter((keyword) =>
      userInput.toLowerCase().includes(keyword)
    );

    let suggestedArticles = matchingKeywords.flatMap(
      (keyword) => articles[keyword] || []
    );

    // If no matching articles found, suggest general FAQs
    if (suggestedArticles.length === 0) {
      suggestedArticles = articles.general;
    }

    setSuggestedArticles(suggestedArticles);
    let newTotalInput = [...totalInput, userInput];

    setTotalInput(newTotalInput);

    const result = suggestedArticles.map((article, index) => (
      <li key={index}>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.question}
        </a>
      </li>
    ));

    setStoredResults((prevResults) => [...prevResults, result]);
    setUserInput("");
  };

  const toggleChatbotVisibility = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const combinedResults = [];
  for (let i = 0; i < Math.max(totalInput.length, storedResults.length); i++) {
    if (totalInput[i]) combinedResults.push(totalInput[i]);
    if (storedResults[i]) combinedResults.push(storedResults[i]);
  }

  return (
    <div className="faq-chatbot-container">
      {chatbotVisible && (
        <div className="chatbot-details-container">
          <div className="chatbot-details-top-container">
            <div className="chatbot-title-container">
              <h3 className="chatbot-title">Chatbot</h3>
              <IoClose
                onClick={toggleChatbotVisibility}
                className="header-icon"
              />
            </div>
            <div className="chatbot-container">
              <div className="chatbot-inside-container">
                <span className="stored-results">
                  You can ask questions related to Name Drop, and I will suggest
                  a link that you can visit by clicking.
                </span>
                {combinedResults.map((result, index) => (
                  <span
                    className={
                      Array.isArray(result) ? "stored-results" : "total-input"
                    }
                    key={index}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your question here..."
            />

            <button onClick={handleSubmit}>ask</button>
          </div>
        </div>
      )}
      <div className="btn-container">
        <button className="toggle-button" onClick={toggleChatbotVisibility}>
          {chatbotVisible ? (
            <IoClose className="chat-footer-icon" />
          ) : (
            <HiChatBubbleBottomCenterText className="chat-footer-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FAQChatbot;
