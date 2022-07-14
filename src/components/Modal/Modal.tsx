import React, { FC } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";
import Padding from "../Padding";
import VStack from "../VStack";

const StyledModal = styled.div<ElementProps>`
  z-index: 1000 !important;
  // position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.4) !important;
  position: fixed;
  margin: 0 !important;

  span {
    display: flex;
    flex-direction: column;
    padding: ${(props) =>
      props?.sx?.padding ? props?.sx?.padding : 20}px !important;
    max-width: ${(props) =>
      props.maxWidth ? props.maxWidth : "400px"} !important;
    border: ${(props) =>
      props.border && `1px solid ${props.border}`} !important;
    gap: ${(props) => (props.gap ? props.gap : 10)}px !important;
    margin: 0 auto !important;
    position: absolute;
    background: #fff !important;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    border-radius: ${(props) =>
      props.rounded ? props.rounded : 2}px !important;
    align-items: ${(props) => props.alignItems && props.alignItems} !important;
    justify-content: ${(props) =>
      props.justifyContent && props.justifyContent} !important;
    color: ${(props) => (props.color ? props.color : "#000")} !important;
    @media (max-width: 786px) {
      max-width: 100% !important;
      margin: 20px;
    }

    @media (max-width: 786px) {
      flex-grow: 1;
      max-width: 100%;
      padding: 20px;
    }
  }
`;

const Modal: FC<ElementProps> = ({
  sx,
  gap,
  style,
  width,
  height,
  position,
  color,
  backgroundColor,
  rounded,
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <StyledModal
      gap={gap}
      style={style}
      sx={sx}
      position={position}
      color={color}
      rounded={rounded}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      <span>
        <Padding padding={20}>{children}</Padding>
      </span>
    </StyledModal>
  );
};

export default Modal;
