// Layer props
// Copied from HStack.
// Merge this with VStack, Container

export interface ElementProps {
  id?: string;
  gap?: number;
  style?: any;
  rounded?: number;
  maxWidth?: string;
  flexDirection?: "row" | "column";
  position?: string;
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
  children?: any;
}
