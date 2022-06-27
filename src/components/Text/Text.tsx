import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export interface TextProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: number;
  size?: number;
  color?: string;
  children?: string;
  textAlign?: "left" | "center" | "right";
}

const StyledText = styled.h1<TextProps>`
  text-align: ${(props) => props.textAlign && props.textAlign} !important;
  font-size: ${(props) => (props.size ? props.size : 16)}px !important;
  font-weight: ${(props) => props.weight && props.weight} !important;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
`;

const Text: FC<TextProps> = ({
  children,
  weight,
  color,
  size,
  type,
  ...props
}) => {
  return (
    <StyledText weight={weight} size={size} color={color} {...props} as={type}>
      {children}
    </StyledText>
  );
};

export default Text;
