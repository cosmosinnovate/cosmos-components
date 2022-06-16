import React, { FC } from 'react';
import styled from 'styled-components';

export interface VStackProps {
  gap?: number;
  rounded?: number;
  backgroundColor?: string;
  color?: string;
  alignItems?: "center" | "stretch" | "start" | "end";
  justifyContent?: "start" |"space-between" | "space-around" | "space-evenly";
  wrap?: "wrap" | "nowrap";
  children?: any;
  sx?: { pl?: number, pr?: number, pt?: number, pb?: number, padding?: number, backgroundColor?: string };
}

export const StyledVStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  gap:${props => props.gap ? props.gap : 10}px !important;
  width: 100%;

  padding: ${props => props.sx?.padding && props.sx?.padding}px !important;
  padding-left:${props => props.sx?.pl && props.sx?.pl}px !important;
  padding-right:${props => props.sx?.pr && props.sx?.pr}px !important;
  padding-top:${props => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom:${props => props.sx?.pb && props.sx?.pb}px important;

  border-radius:${props => props.rounded ? props.rounded : 2}px !important;
  align-items:${props => props.alignItems ? props.alignItems : `auto`} !important;
  justify-content:${props => props.justifyContent ? props.justifyContent : `start`} !important;
  color: ${props => props.color ? props.color : '#000'} !important;
  background:${props => props.backgroundColor ? props.backgroundColor  : 'transparent'} !important;
  @media(min-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px  !important;
  }

  @media(max-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px  !important;
  }
`;

const VStack: FC<VStackProps> = ({
  sx,
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
      sx={sx}
      color={color}
      backgroundColor={backgroundColor}
      rounded={rounded}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}>
    {children}
    </StyledVStack>
  )
}

export default VStack;