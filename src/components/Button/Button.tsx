import React, { FC, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";

export interface ButtonProps {
  children?: string | any;
  size?: "small" | "medium" | "large";
  type: "submit" | "button";
  onClick: MouseEventHandler<HTMLButtonElement>;
  elevation?: number;
  backgroundColor?: string;
  rounded?: number;
  primary?: boolean;
  disabled?: boolean;
  width?: number;
  position?: string;
  style?: any;
}

// &:hover {
//   background-color: ${(props) =>
//     props.primary ? "#55bd90" : "#6bedb5"} !important;
// }

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  // padding: 1rem 2rem;
  font-size: 1.5rem;
  outline: 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)} !important;
  cursor: pointer;
  border-radius: ${(props) =>
    props.rounded ? `${props.rounded}px` : "0.25rem"} !important;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")} !important;
  border: 0;
  color: ${(props) => (props.primary ? "#1b116e" : "#FFFFFF")} !important;
  padding: ${(props) =>
    props.size === "small"
      ? "10px"
      : props.size === "medium"
      ? "16px"
      : "22px"} !important;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#18A0FB"} !important;
  box-shadow: ${(props) =>
    props.elevation
      ? `0px 1x 0.9rem rgba(0, 0, 0, 0.${props.elevation})`
      : `0px 1px 0.9rem rgba(0, 0, 0, 0.3)`};

  // On small screen, take the whole width unless user selects button width
  // Rippled effect
  transition: background 400ms;
  span.ripple {
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const Button: FC<ButtonProps> = ({
  size,
  style,
  position,
  primary,
  disabled,
  rounded,
  elevation,
  type,
  children,
  onClick,
  ...props
}) => {
  useEffect(() => {
    function createRipple(event: {
      currentTarget: any;
      clientX: number;
      clientY: number;
    }) {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    }

    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
      button.addEventListener("click", createRipple);
    }
  });

  return (
    <StyledButton
      style={style}
      position={position}
      elevation={elevation}
      rounded={rounded}
      onClick={onClick}
      type={type}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
