import React, { useRef } from "react";
import About from "./About/About";
import { ContactFormStyled } from "./ContactForm.styled";

export default function ContactForm({ pagename }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !contentRef.current.value
    )
      return;

    const url = `http://${window.location.host}/sendmail`;
    fetch(url, {
      method: "POST",

      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        content: contentRef.current.value,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <ContactFormStyled data-pagename={pagename}>
      <About />
      <form onSubmit={handleSubmit}>
        <h1>Get in touch</h1>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="yourName">Imię i Nazwisko</label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="yourName"
            placeholder="Imię i Nazwisko"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailContent">Treść maila</label>
          <textarea
            ref={contentRef}
            type="text"
            className="form-control"
            id="emailContent"
            placeholder="Treść"
          />
        </div>

        <button className="submit-button" type="submit">
          Wyślij
        </button>
      </form>
    </ContactFormStyled>
  );
}
