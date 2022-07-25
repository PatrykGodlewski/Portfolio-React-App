import React, { useContext, useRef, useState } from "react";
import About from "./About/About";
import { ContactFormStyled } from "./ContactForm.styled";
import { ErrorPopupStyled } from "../ErrorPopup/ErrorPopup.styled";
import { Context } from "../../App";

export default function ContactForm({ pagename }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);

  const { setNotification } = useContext(Context);

  const [error, setError] = useState({
    name: false,
    email: false,
    content: false,
  });

  const handleValidationOnBlur = () => {
    setError({
      name: false,
      email: false,
      content: false,
    });
    if (!nameRef.current.value) setError((prev) => ({ ...prev, name: true }));
    if (!emailRef.current.value) setError((prev) => ({ ...prev, email: true }));
    if (!contentRef.current.value)
      setError((prev) => ({ ...prev, content: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      name: false,
      email: false,
      content: false,
    });
    if (!nameRef.current.value) setError((prev) => ({ ...prev, name: true }));
    if (!emailRef.current.value) setError((prev) => ({ ...prev, email: true }));
    if (!contentRef.current.value) {
      setError((prev) => ({ ...prev, content: true }));
    }

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !contentRef.current.value
    )
      return;

    const url = `https://${window.location.host}/sendmail`;
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
    })
      .then((res) => {
        setNotification(
          "Thanks for contacting me! I will read that email as fast as I can 😊"
        );
      })
      .catch((err) => {
        setNotification("Something went wrong");
      });
  };

  return (
    <ContactFormStyled error={error} data-pagename={pagename}>
      <About />
      <form onSubmit={handleSubmit}>
        <h1>Get in touch</h1>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            onBlur={handleValidationOnBlur}
            ref={emailRef}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Email"
          />
          {error.email && (
            <ErrorPopupStyled>Email jest wymagany</ErrorPopupStyled>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="yourName">Imię i Nazwisko</label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="yourName"
            placeholder="Imię i Nazwisko"
            onBlur={handleValidationOnBlur}
          />
          {error.name && (
            <ErrorPopupStyled>Imię i nazwisko jest wymagane</ErrorPopupStyled>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="emailContent">Treść maila</label>
          <textarea
            ref={contentRef}
            type="text"
            className="form-control"
            id="emailContent"
            placeholder="Treść"
            onBlur={handleValidationOnBlur}
          />
          {error.content && (
            <ErrorPopupStyled>Treść jest wymagana</ErrorPopupStyled>
          )}
        </div>

        <button className="submit-button" type="submit">
          Wyślij
        </button>
      </form>
    </ContactFormStyled>
  );
}
