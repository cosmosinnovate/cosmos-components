import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";

export interface CenterProps {
  gap?: number;
  style?: any;
  rounded?: number;
  position?: string;
  height?: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  sx?: {
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    padding?: number;
    backgroundColor?: string;
  };
  wrap?: "wrap" | "nowrap";
  children?: any;
}

/**
 * @param backgroundColor?: string
 * @param alignItems?: string
 * @param justifyContent?: string
 * @param rounded?: number;
 * @param gap?: number;
 * @param sx?: object
 * @param children?: component
 */
export const StyledCenter = styled.div<CenterProps>`
  display: flex;
  // flex-direction: column;
  width: ${(props) => (props.width ? props.width : "auto")} !important;
  height: ${(props) => (props.height ? props.height : "auto")} !important;
  position: ${(props) => props.position && props.position} !important;
  gap: ${(props) => (props.gap ? props.gap : 10)}px !important;
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
  align-items: center !important;
  justify-content: center !important;
`;

const Center: FC<CenterProps> = ({
  sx,
  style,
  width,
  height,
  position,
  wrap,
  backgroundColor,
  rounded,
  children,
  ...props
}) => {
  return (
    <StyledCenter
      style={style}
      sx={sx}
      width={width}
      height={height}
      wrap={wrap}
      backgroundColor={backgroundColor}
      rounded={rounded}
      {...props}
    >
      {children}
    </StyledCenter>
  );
};

export default Center;
