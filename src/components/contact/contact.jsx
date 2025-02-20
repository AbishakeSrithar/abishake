import { useState } from "react";
import "./contact.scss";
import TypeWriterEffect from "react-typewriter-effect";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={`${process.env.PUBLIC_URL}/assets/contact.png`} alt="a" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Roboto",
                color: "#808080",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              multiText={[
                "mail sent",
                "Jk! :P",
                "Discord: lil_shakee",
              ]}
              multiTextDelay={2000}
              typeSpeed={30}
            />
          </span>
          )}
          
        </form>
      </div>
    </div>
  );
}
