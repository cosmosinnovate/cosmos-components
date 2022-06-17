import React, { FC } from "react";
import styled from "styled-components";

export interface ArticleProps {
  gap?: number;
  width?: string;
  position?: string;
  height?: string;
  rounded?: number;
  backgroundColor?: string;
  color?: string;
  alignItems?: "center" | "stretch" | "start" | "end";
  justifyContent?:
    | "start"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center";
  wrap?: "wrap" | "nowrap";
  children?: any;
  sx?: {
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    padding?: number;
    backgroundColor?: string;
  };
  flexDirection?: string;
}

export const StyledArticle = styled.article<ArticleProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  gap: ${(props) => (props.gap ? props.gap : 10)}px !important;

  width: ${(props) => (props.width ? props.width : "auto")} !important;
  height: ${(props) => (props.height ? props.height : "auto")} !important;

  position: ${(props) => props.position && props.position} !important;

  padding: ${(props) => props.sx?.padding && props.sx?.padding}px !important;
  padding-left: ${(props) => props.sx?.pl && props.sx?.pl}px !important;
  padding-right: ${(props) => props.sx?.pr && props.sx?.pr}px !important;
  padding-top: ${(props) => props.sx?.pt && props.sx?.pt}px !important;
  padding-bottom: ${(props) => props.sx?.pb && props.sx?.pb}px important;

  border-radius: ${(props) => (props.rounded ? props.rounded : 2)}px !important;
  align-items: ${(props) => props.alignItems && props.alignItems} !important;
  justify-content: ${(props) =>
    props.justifyContent && props.justifyContent} !important;
  color: ${(props) => (props.color ? props.color : "#000")} !important;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"} !important;
  @media (min-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px !important;
  }

  @media (max-width: 786px) {
    width: 100% !important;
    flex-grow: 1 !important;
    margin: 0px !important;
  }
`;

const Article: FC<ArticleProps> = ({
  sx,
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
    <StyledArticle
      sx={sx}
      width={width}
      height={height}
      position={position}
      color={color}
      backgroundColor={backgroundColor}
      rounded={rounded}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </StyledArticle>
  );
};

export default Article;
