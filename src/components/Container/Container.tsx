import React, { FC } from "react";
import styled from "styled-components";

export interface ContainerProps {
  gap?: number;
  style?: any;
  maxWidth?: string;
  position?: string;
  height?: string;
  rounded?: number;
  backgroundColor?: string;
  color?: string;
  alignItems?: "center" | "stretch" | "start" | "end";
  justifyContent?:
    | "start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center";
  wrap?: "wrap" | "nowrap";
  children?: any;
  sx?: {
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    padding?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
    margin?: number;
    backgroundColor?: string;
  };
  flexDirection?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  gap: ${(props) => props.gap && props.gap}px !important;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"} !important;
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth : "auto"} !important;
  height: ${(props) => (props.height ? props.height : "auto")} !important;
  position: ${(props) => props.position && props.position} !important;

  // Padding
  padding: ${(props) => props.sx?.padding && props.sx?.padding}px !important;
  padding-left: ${(props) => props.sx?.pl && props.sx?.pl}px !important;
  padding-right: ${(props) => props.sx?.pr && props.sx?.pr}px !important;
  padding-top: ${(props) => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom: ${(props) => props.sx?.pb && props.sx?.pb}px important;

  // Margin
  margin: ${(props) => props.sx?.margin && props.sx?.margin}px !important;
  margin-left: ${(props) => props.sx?.ml && props.sx?.ml}px !important;
  margin-right: ${(props) => props.sx?.mr && props.sx?.mr}px !important;
  margin-top: ${(props) => props.sx?.mt && props.sx?.mt}px !important;
  margin-bottom: ${(props) => props.sx?.mb && props.sx?.mb}px important;

  border-radius: ${(props) => (props.rounded ? props.rounded : 2)}px !important;
  align-items: ${(props) => props.alignItems && props.alignItems} !important;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"} !important;
  margin: 0px auto;
  @media (max-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px auto !important;
  }
`;

const Container: FC<ContainerProps> = ({
  sx,
  style,
  maxWidth,
  height,
  position,
  color,
  backgroundColor,
  rounded,
  alignItems,
  children,
  ...props
}) => {
  return (
    <StyledContainer
      sx={sx}
      style={style}
      maxWidth={maxWidth}
      height={height}
      position={position}
      color={color}
      backgroundColor={backgroundColor}
      rounded={rounded}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
