import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface HStackProps {

}
/**
 * @param margin?: string
 */
export const Layout = styled.div`
  margin:${props => props.size ? props.size : '10px'};
  @media(min-width: 768px) {
      flex-grow: 1 !important;
    }
`;



/**
 * @param backgroundcolor?: string
 * @param alignitems?: boolean
 * @param radius?: string;
 * @param gap?: string;
 */
export const HStack = styled.div`
display: flex;
flex-direction: row;
width: 100% !important;
gap: ${props => props.gap ? props.gap : '20px'} !important;
border-radius:${props => props.radius ? props.radius : '10px'} !important;
background-color:${props => props.backgroundcolor ? props.backgroundcolor : 'transparent'} !important;
justify-content:${props => props.justifycontent ? props.justifycontent : `start`};
align-items:${props => props.alignitems ? props.alignitems : `auto`} !important;
@media(max-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    flex-wrap: ${props => !props.wrap ? 'nowrap' : props.wrap}  !important;
}
`;
