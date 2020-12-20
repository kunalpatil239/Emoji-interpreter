import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning face with big eyes",
  "😪": "Sleepy Face",
  "🥵": "Hot Face",
  "🤣": "Rolling on the Floor Laughing",
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🌈": "Rainbow Flag",
  "🏳️‍⚧": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) meaning = "Meaning not found";
    setMeaning(meaning);
  }
  function onEmojiClick(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1 className="heading">Do you know this Emoji?</h1>
      <hr />
      <h2>
        {" "}
        Enter any Emoji you want to know the meaning of. Or select from the
        below mentioned set.
      </h2>
      <input onChange={emojiInputHandler}></input>
      <h2 className="meaning">{meaning}</h2>
      <h2>Emojis We know</h2>
      {Object.keys(emojiDictionary).map((item) => (
        <span
          onClick={() => onEmojiClick(item)}
          key={item}
          className="emoji-small"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
