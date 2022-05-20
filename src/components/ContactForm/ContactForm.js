import React from "react";
import About from "./About/About";
import { ContactFormStyled } from "./ContactForm.styled";

export default function ContactForm({ pagename }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactFormStyled data-pagename={pagename}>
      <About />
      <form onSubmit={handleSubmit}>
        <h1>Get in touch</h1>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="yourName">Imię i Nazwisko</label>
          <input
            type="text"
            className="form-control"
            id="yourName"
            placeholder="Imię i Nazwisko"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailContent">Treść maila</label>
          <textarea
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
