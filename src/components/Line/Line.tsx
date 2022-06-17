import React, { FC } from "react";
import styled from "styled-components";

export interface LineProps {
  width?: number;
  borderStyle?: string;
  backgroundColor?: string;
}

export const StyledHLine = styled.span<LineProps>`
  display: flex;
  border-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#e0e0e0"} !important;
  border-width: ${(props) => (props.width ? props.width : 0)}px !important;
  border-style: ${(props) =>
    props.borderStyle ? props.borderStyle : "solid"} !important;
`;

const Line: FC<LineProps> = ({
  width,
  borderStyle,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledHLine
      borderStyle={borderStyle}
      width={width}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default Line;
