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
  border?: string;
  backgroundColor?: string;
  alignItems?: "center" | "stretch" | "start" | "end";
  justifyContent?:
    | "start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center";
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
