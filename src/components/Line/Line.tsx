import React, { FC } from "react";
import styled from "styled-components";

export interface LineProps {
  width?: number;
  height?: number;
  borderStyle?: string;
  backgroundColor?: string;
}

export const StyledHLine = styled.span<LineProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : 0)}px !important;
  border-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#e0e0e0"};
  border-width: ${(props) => (props.height ? props.height : 0)}pxt;
  border-style: ${(props) => (props.borderStyle ? props.borderStyle : "solid")};
`;

const Line: FC<LineProps> = ({
  width,
  height,
  borderStyle,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledHLine
      borderStyle={borderStyle}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default Line;
