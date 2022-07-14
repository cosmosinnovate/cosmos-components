import React, { FC } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";

export const StyledVStack = styled.div<ElementProps>`
  display: flex;
  border: ${(props) => props.border && `1px solid ${props.border}`} !important;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : 10)}px !important;

  width: ${(props) => (props.width ? props.width : "auto")} !important;
  height: ${(props) => (props.height ? props.height : "auto")} !important;
  position: ${(props) => props.position && props.position} !important;
  padding: ${(props) => props.sx?.padding && props.sx?.padding}px !important;
  padding-left: ${(props) => props.sx?.pl && props.sx?.pl}px !important;
  padding-right: ${(props) => props.sx?.pr && props.sx?.pr}px !important;
  padding-top: ${(props) => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom: ${(props) => props.sx?.pb && props.sx?.pb}px important;
  margin: ${(props) => props.sx?.margin && props.sx?.margin}px !important;
  margin-left: ${(props) => props.sx?.ml && props.sx?.ml}px !important;
  margin-right: ${(props) => props.sx?.mr && props.sx?.mr}px !important;
  margin-top: ${(props) => props.sx?.mt && props.sx?.mt}px !important;
  margin-bottom: ${(props) => props.sx?.mb && props.sx?.mb}px important;
  border-radius: ${(props) => (props.rounded ? props.rounded : 2)}px !important;
  align-items: ${(props) => props.alignItems && props.alignItems} !important;
  justify-content: ${(props) =>
    props.justifyContent && props.justifyContent} !important;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"} !important;

  @media (min-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px !important;
    padding: 0px !important;
  }

  @media (max-width: 786px) {
    width: 100%;
    flex-grow: 1;;s
    margin: 0px;
    padding: 0px;
  }
`;

const VStack: FC<ElementProps> = ({
  sx,
  gap,
  style,
  width,
  height,
  position,
  color,
  backgroundColor,
  rounded,
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <StyledVStack
      gap={gap}
      style={style}
      sx={sx}
      width={width}
      height={height}
      position={position}
      color={color}
      backgroundColor={backgroundColor}
      rounded={rounded}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </StyledVStack>
  );
};

export default VStack;
