import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface HStackProps {
  gap?: number;
  rounded?: number;
  color?: string;
  backgroundColor?: string;
  alignItems?: "center" | "stretch" | "start" | "end";
  justifyContent?: "start" |"space-between" | "space-around" | "space-evenly";
  sx?: {pl?: number, pr?: number, pt?: number, pb?: number, padding?: number, backgroundColor?: string }
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
export const StyledHStack = styled.div<HStackProps>`
  display: flex;
  flex-direction: row;
  width: 100% !important;
  gap: ${props => props.gap ? props.gap : 10}px !important;

  padding: ${props => props.sx?.padding && props.sx?.padding}px !important;
  padding-left:${props => props.sx?.pl && props.sx?.pl}px !important;
  padding-right:${props => props.sx?.pr && props.sx?.pr}px !important;
  padding-top:${props => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom:${props => props.sx?.pb && props.sx?.pb}px important;

  border-radius:${props => props.rounded ? props.rounded : 10}px !important;
  
  color: ${props => props.color ? props.color : '#000'} !important;
  background:${props => props.backgroundColor || props.sx?.backgroundColor ? props.backgroundColor || props.sx?.backgroundColor : 'transparent'} !important;
  justify-content:${props => props.justifyContent ? props.justifyContent : `start`};
  align-items:${props => props.alignItems ? props.alignItems : `auto`} !important;
  @media(max-width: 786px) {
      width: 100% !important;
      flex-grow: 1 !important;
      flex-wrap: ${props => !props.wrap ? 'nowrap' : props.wrap}  !important;
  }
`;

const HStack: FC<HStackProps> = ({
  sx,
  wrap,
  backgroundColor,
  rounded,
  alignItems,
  justifyContent,
  children,
  ...props }) => {
  return <StyledHStack
    sx={sx}
    wrap={wrap}
    backgroundColor={backgroundColor}
    rounded={rounded}
    alignItems={alignItems}
    justifyContent={justifyContent}
    {...props}>
    {children}
  </StyledHStack>
  
}

export default HStack;