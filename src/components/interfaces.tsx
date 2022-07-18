// Read about css properties here: https://www.w3schools.com/cssref/pr_class_position.asp

import { ReactNode } from "react";

export interface ElementProps {
  id?: string;
  gap?: number;
  style?: any;
  rounded?: number;
  maxWidth?: string;
  weight?: number;
  flexDirection?: "row" | "column";
  textAlign?: "left" | "center" | "right";
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "a"
    | "div"
    | "section"
    | "main";
  href?: string;
  lineHeight?: string;
  position?:
    | "static" // Default value. Elements render in order, as they appear in the document flow
    | "absolute" // The element is positioned relative to its first positioned (not static) ancestor element
    | "fixed" // The element is positioned relative to the browser window
    | "relative" // The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position
    | "sticky" // The element is positioned based on the user's scroll position
    | "initial" // Sets this property to its default value. Read about initial
    | "inherit"; //Inherits this property from its parent element. Read about inherit
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  elevation?: number;
  border?: string;
  size?: "small" | "medium" | "large" | "larger" | number | undefined;
  backgroundColor?: string;
  alignItems?:
    | "center"
    | "stretch"
    | "start"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "initial"
    | "inherit";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  sx?: {
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    padding?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
    margin?: number;
    backgroundColor?: string;
  };
  wrap?: "wrap" | "nowrap";
  open?: Function;
  close?: Function;
  isOpen?: boolean;
  padding?: string;
  children?: ReactNode;
  display?: string;
  logoText?: any;
  menuColor?: string;
  logoImage?: string;
  logoWidth?: string;
  logoHeight?: string;
}
