import React, { FC } from "react";
import styled from "styled-components";

export interface MarginProps {
  margin?: number;
  children: any;
}

const StyledMargin = styled.span<MarginProps>`
  margin: ${(props) => (props.margin ? props.margin : 6)}px !important;
`;

const Margin: FC<MarginProps> = ({ margin, children, ...props }) => {
  return (
    <StyledMargin margin={margin} {...props}>
      {children}
    </StyledMargin>
  );
};

export default Margin;
