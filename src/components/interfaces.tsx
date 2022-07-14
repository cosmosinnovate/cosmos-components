// Read about css properties here: https://www.w3schools.com/cssref/pr_class_position.asp

export interface ElementProps {
  id?: string;
  gap?: number;
  style?: any;
  rounded?: number;
  maxWidth?: string;
  flexDirection?: "row" | "column";
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
  className?: any;
  elevation?: number;
  border?: string;
  size?: "small" | "medium" | "large" | "larger";
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
  children?: any;
  display?: string;
  logoText?: any;
  menuColor?: string;
  logoImage?: string;
  logoWidth?: string;
  logoHeight?: string;
}
