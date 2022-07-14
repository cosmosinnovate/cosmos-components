import React, { FC, useState } from "react";
import styled from "styled-components";
import HStack from "../HStack";
import Text from "../Text";
import { ElementProps } from "../interfaces";

export const HumburgerMenu = styled.div<ElementProps>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  img {
    width: ${(props) => props?.logoWidth && props.logoWidth} !important;
    height: ${(props) => props?.logoHeight && props.logoHeight} !important;
  }
  span {
    height: 2px;
    width: 25px;
    background: ${(props) => (props.menuColor ? props.menuColor : "#000")};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (min-width: 786px) {
    display: none;
    margin: 0;
    margin: 0;
  }
`;

const CloseHumburgerMenu = styled.div<ElementProps>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  img {
    width: ${(props) => props?.logoWidth && props.logoWidth} !important;
    height: ${(props) => props?.logoHeight && props.logoHeight} !important;
  }
  span.one {
    position: absolute;
    height: 2px;
    width: 25px;
    background: ${(props) => (props.menuColor ? props.menuColor : "#000")};
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    // transition: ease 0.3s, transform ease 0.3s 0.3s;
  }
  span.two {
    z-index: 2;
    height: 2px;
    width: 25px;
    background: ${(props) => (props.menuColor ? props.menuColor : "#000")};
    -ms-transform: rotate(45deg);
    // transition: ease 0.3s, transform ease 0.3s 0.3s;
    transform: rotate(-45deg);
  }
  @media (min-width: 786px) {
    display: none;
    margin: 0;
    margin: 0;
  }
`;

const StyledNavbar = styled.div<ElementProps>`
  height: ${(props) => props.height && props.height} !important;
  padding: ${(props) =>
    props.padding ? props.padding : "1rem 2rem"} !important;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#18A0FB"} !important;
  box-shadow: ${(props) =>
    props.elevation && `0px 1px 50px rgba(0, 0, 0, 0.${props.elevation})`};
  @media (max-width: 786px) {
    flex-wrap: wrap !important;
  }
`;

const Menu = styled.div<ElementProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"} !important;
  width: ${(props) => (props.width ? props.width : "100%")} !important;
  @media (max-width: 768px) {
    flex-grow: 1 !important;
    overflow: hidden;
    flex-direction: column;
    display: ${(props) => props.isOpen && "none"} !important;
  }
`;

const Navbar: FC<ElementProps> = ({
  backgroundColor,
  logoText,
  logoImage,
  logoWidth,
  logoHeight,
  height,
  width,
  justifyContent,
  alignItems,
  elevation,
  className,
  children,
  padding,
  display,
  style,
  open,
  close,
  ...props
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNavbar
      display={display}
      height={height}
      width={width}
      padding={padding}
      style={style}
      className={className}
      backgroundColor={backgroundColor}
      elevation={elevation}
    >
      <HStack justifyContent="space-between" alignItems="center" wrap="wrap">
        {logoText ? (
          <Text>{logoText}</Text>
        ) : (
          <img src={logoImage} alt="logo" width={logoWidth} />
        )}

        {/* Add humburger menu button */}
        {menuOpen ? (
          <CloseHumburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <span className="one" />
            <span className="two" />
          </CloseHumburgerMenu>
        ) : (
          <HumburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </HumburgerMenu>
        )}
        <Menu
          isOpen={!menuOpen}
          alignItems={alignItems}
          justifyContent={justifyContent}
        >
          {children}
        </Menu>
      </HStack>
    </StyledNavbar>
  );
};

export default Navbar;
