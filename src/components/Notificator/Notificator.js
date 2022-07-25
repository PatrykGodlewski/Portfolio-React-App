import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../App";
import {
  CloseButton,
  NotificatorContainer,
  NotificatorStyled,
} from "./Notificator.styled";

const Notificator = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(true);
  const notificationRef = useRef(null);
  const { notification, setNotification } = useContext(Context);

  useEffect(() => {
    if (!notification) return;
    setShow(true);

    setTimeout(() => {
      setShow(false);
      setNotification("");
    }, 5000);
  }, [notification]);

  return (
    show && (
      <NotificatorContainer>
        <NotificatorStyled ref={notificationRef} hover={hover}>
          {notification}
          <CloseButton
            hover={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setShow(false)}
          >
            X
          </CloseButton>
        </NotificatorStyled>
      </NotificatorContainer>
    )
  );
};

export default Notificator;
