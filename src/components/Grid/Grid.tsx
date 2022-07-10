import React, { FC } from "react";
import styled from "styled-components";

export interface GridProps {
  gap?: string;
  justifyContent?:
    | "start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center";
  children?: any;
}

export const StyledGrid = styled.div<GridProps>`
  display: grid !important;
  row-gap: ${(props) => (props.gap ? props.gap : "10px")} !important;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "10px"} !important;
  column-gap: ${(props) => (props.gap ? props.gap : "10px")} !important;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr) !important;
  }
`;

const Grid: FC<GridProps> = ({ gap, justifyContent, children }) => {
  return (
    <StyledGrid gap={gap} justifyContent={justifyContent}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
