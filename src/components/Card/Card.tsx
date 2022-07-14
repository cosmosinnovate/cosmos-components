import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";

const StyledCard = styled.div<ElementProps>`
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: ${(props) => (props.rounded ? props.rounded : 0)}px !important;
  position: ${(props) => props.position && props.position};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")} !important;
  border: 0;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
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
      ? `0px 1px 50px rgba(0, 0, 0, 0.${props.elevation})`
      : `0px 1px 50px rgba(0, 0, 0, 0.0)`} !important;
  width: ${(props) => (props.width ? props.width : "auto")} !important;
  height: ${(props) => (props.height ? props.height : "auto")} !important;

  position: ${(props) => props.position && props.position} !important;

  padding: ${(props) => props.sx?.padding && props.sx?.padding}px !important;
  padding-left: ${(props) => props.sx?.pl && props.sx?.pl}px !important;
  padding-right: ${(props) => props.sx?.pr && props.sx?.pr}px !important;
  padding-top: ${(props) => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom: ${(props) => props.sx?.pb && props.sx?.pb}px important;

  border-radius: ${(props) =>
    props.rounded ? props.rounded : 10}px !important;

  color: ${(props) => (props.color ? props.color : "#000")} !important;
  background: ${(props) =>
    props.backgroundColor || props.sx?.backgroundColor
      ? props.backgroundColor || props.sx?.backgroundColor
      : "transparent"} !important;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : `start`};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : `auto`} !important;
`;

const Card: FC<ElementProps> = ({
  size,
  style,
  rounded,
  elevation,
  children,
  ...props
}) => {
  return (
    <StyledCard
      style={style}
      rounded={rounded}
      size={size}
      elevation={elevation}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
