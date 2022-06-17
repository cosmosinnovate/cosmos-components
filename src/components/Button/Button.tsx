import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export interface ButtonProps {
  /**
   * @string
   * Label appears in the button
   */
  children?: string;

  /**
   * @string
   * Padding
   * Button size
   */
  size?: "small" | "medium" | "large";

  /**
   * @enum
   * Button type: submit|button
   */
  type: "submit" | "button";

  /**
   * @MouseEventHandler
   * Function onClick
   */
  onClick: MouseEventHandler<HTMLButtonElement>;

  /**
   * @number
   * Background elevation
   */
  elevation?: number;

  /**
   * @string
   * BackgroundColor
   */
  backgroundColor?: string;

  /**
   * @number
   * Rounded | BorderRadius
   */
  rounded?: number;

  /**
   * @string
   * Color: Provide color
   */
  primary?: boolean;

  /**
   * @boolean
   * Disable button
   */
  disabled?: boolean;

  /**
   * @string
   * Width: 100% | any number
   */
  width?: number;

  /**
   *  @string
   * Poistion: absolute | relative | inherite
   */
  position?: string;
}

const StyledButton = styled.button<ButtonProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)} !important;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: ${(props) =>
    props.rounded ? `${props.rounded}px` : "10px"} !important;
  position: ${(props) => props.position && props.position};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")} !important;
  border: 0;
  color: ${(props) => (props.primary ? "#1b116e" : "#FFFFFF")} !important;
  padding: ${(props) =>
    props.size === "small"
      ? "10px"
      : props.size === "medium"
      ? "16px"
      : "22px"} !important;
  &:hover {
    background-color: ${(props) =>
      props.primary ? "#55bd90" : "#6bedb5"} !important;
  }
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#18A0FB"} !important;
  box-shadow: ${(props) =>
    props.elevation
      ? `0px 1px 20px rgba(0, 0, 0, 0.${props.elevation})`
      : `0px 1px 20px rgba(0, 0, 0, 0.1)`};
`;

const Button: FC<ButtonProps> = ({
  size,
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
  return (
    <StyledButton
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
