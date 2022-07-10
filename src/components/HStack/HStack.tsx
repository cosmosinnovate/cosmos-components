import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";

/**
 * @param backgroundColor?: string
 * @param alignItems?: string
 * @param justifyContent?: string
 * @param rounded?: number;
 * @param gap?: number;
 * @param sx?: object
 * @param children?: component
 */
export const StyledHStack = styled.div<ElementProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.gap ? props.gap : 10)}px !important;
  width: ${(props) => (props.width ? props.width : "auto")} !important;
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
  @media (max-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    flex-wrap: ${(props) => (!props.wrap ? "nowrap" : props.wrap)} !important;
    padding: 0px !important;
  }
`;

const HStack: FC<ElementProps> = ({
  sx,
  wrap,
  style,
  width,
  height,
  position,
  backgroundColor,
  rounded,
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <StyledHStack
      sx={sx}
      style={style}
      width={width}
      height={height}
      position={position}
      wrap={wrap}
      backgroundColor={backgroundColor}
      rounded={rounded}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </StyledHStack>
  );
};

export default HStack;
