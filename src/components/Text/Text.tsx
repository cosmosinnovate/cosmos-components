import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export interface TextProps {
  style?: any;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: number;
  size?: number;
  color?: string;
  children?: string;
  textAlign?: "left" | "center" | "right";
  lineHeight?: string;
}

const StyledText = styled.h1<TextProps>`
  text-align: ${(props) => props.textAlign && props.textAlign} !important;
  font-size: ${(props) => (props.size ? props.size : 16)}px !important;
  font-weight: ${(props) => props.weight && props.weight} !important;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
  line-height: ${(props) => props.lineHeight && props.lineHeight} !important;
`;

const Text: FC<TextProps> = ({
  style,
  children,
  weight,
  color,
  size,
  type,
  ...props
}) => {
  return (
    <StyledText
      style={style}
      weight={weight}
      size={size}
      color={color}
      {...props}
      as={type}
    >
      {children}
    </StyledText>
  );
};

export default Text;
