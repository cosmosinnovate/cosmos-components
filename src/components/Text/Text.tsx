import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";

const StyledText = styled.h1<ElementProps>`
  text-align: ${(props) => props.textAlign && props.textAlign} !important;
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-weight: ${(props) => props.weight && props.weight};
  color: ${(props) => (props.color ? props.color : "#000")};
  line-height: ${(props) => props.lineHeight && props.lineHeight} !important;
`;

const Text: FC<ElementProps> = ({
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
