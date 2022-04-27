import React, { useState } from "react";
import { Menu, MenuIcon, MenuItem, Link } from "./MenuButton.styled";
import { MENU_LINKS } from "../../globals/siteOptions";
import { css } from "styled-components";

export default function MenuButton() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleMenuReveal = (e) => {
    setIsRevealed((prev) => !prev);
  };

  const getAbsolutePosition = (isRevealed, theme, index) => {
    const upperHalf = Math.ceil(MENU_LINKS.length / 2);
    // const descendedHalf = Math.floor(MENU_LINKS.length / 2);
    const pos = +index + 1;

    const amount = upperHalf >= pos ? pos : pos - upperHalf;
    const position = upperHalf >= pos;

    return position
      ? css`
          left: ${isRevealed ? positionValue(amount, theme) : "0px"};
        `
      : css`
          top: ${isRevealed ? positionValue(amount, theme) : "0px"};
        `;
  };

  const positionValue = (amount, theme) => {
    const posVal = theme.RATIO * amount + "px";

    return posVal;
  };

  return (
    <Menu>
      <MenuIcon isRevealed={isRevealed} onClick={handleMenuReveal}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </MenuIcon>

      {MENU_LINKS.map((item, index) => (
        <MenuItem
          key={index}
          isRevealed={isRevealed}
          customCss={({ theme }) =>
            getAbsolutePosition(isRevealed, theme, index)
          }
        >
          <Link key={index} href={item.link}>
            <img src={item.icon} alt="logo" />
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
}
