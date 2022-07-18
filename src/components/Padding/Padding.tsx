import React, { FC } from "react";
import styled from "styled-components";

export interface PaddingProps {
  padding?: number;
  children: any;
}

const StyledPadding = styled.span<PaddingProps>`
  padding: ${(props) => (props.padding ? props.padding : 6)}px;
`;

const Padding: FC<PaddingProps> = ({ padding, children, ...props }) => {
  return (
    <StyledPadding padding={padding} {...props}>
      {children}
    </StyledPadding>
  );
};

export default Padding;
