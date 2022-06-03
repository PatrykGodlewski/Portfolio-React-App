import React, { useRef, useState } from "react";
import { AboutStyled } from "./About.styled";
import { FaCopy } from "react-icons/fa";

export default function About() {
  const refMail = useRef("");
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(refMail.current.innerText).then(() => {
      setShowCopied(true);
    });
  };

  return (
    <AboutStyled>
      <div className="container">
        <h1>My address email</h1>
        <div className="mail">
          <h2 ref={refMail}>pgodlewski099@gmail.com</h2>
          <div class="button-wrapper">
            {showCopied && <strong>COPIED!</strong>}
            <button onClick={handleCopy}>
              <FaCopy color="white" />
            </button>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}
