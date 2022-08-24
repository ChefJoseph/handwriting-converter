import React from "react";
import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#22C3B3",
    "--accent": "white",
  },
  secondary: {
    "--main": "#CBF6F1",
    "--accent": "#22C3B3",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else if (variant === "welcome") {
    Component = WelcomeTag;
  }
  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;

const WelcomeTag = styled(ButtonBase)`
  background-color: white;
  color: #363636;
  // border: 2px solid var(--main);
  pointer-events: none;
  // &:hover {
  //   background: hsl(235deg 85% 97%);
  // }
`;
export default Button;
