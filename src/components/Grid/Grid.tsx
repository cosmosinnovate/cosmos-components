import React, { FC } from "react";
import styled from "styled-components";

export interface GridProps {
  rowGap?: number;
  children?: any;
}

export const StyledGrid = styled.div<GridProps>`
  display: block !important;
  display: grid !important;
  border-radius: 10px;
  row-gap: 10px;
  column-gap: 10px;

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

const Grid: FC<GridProps> = ({ rowGap, children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
