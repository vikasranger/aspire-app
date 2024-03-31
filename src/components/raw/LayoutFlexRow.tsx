import {Box} from "@mui/material";
import {Property} from "csstype";
import React from "react";

export default function LayoutFlexRow(props: {
  children: React.ReactNode,
  justifyContent?: Property.JustifyContent,
  alignItems?: Property.AlignItems,
  height?: Property.Height,
  width?: Property.Width,
  minHeight?: Property.Height,
  maxWidth?: Property.MaxWidth,
  maxHeight?: Property.MaxHeight,
  bgcolor?: Property.BackgroundColor,
  padding?: Property.Padding,
  margin?: Property.Margin,
  border?: Property.Border,
  borderRadius?: Property.BorderRadius,
  boxShadow?: Property.BoxShadow,
  flexGrow?: number,
  onClick?: () => void,
  overflowX?: Property.OverflowX,
  overflowY?: Property.OverflowY,
  hoverbgcolor?: Property.BackgroundColor,
  hoverColor?: Property.Color
})
{
  const {
    children,
    justifyContent,
    alignItems,
    height,
    width,
    minHeight,
    maxHeight,
    maxWidth,
    bgcolor,
    padding,
    margin,
    border,
    borderRadius,
    boxShadow,
    hoverbgcolor,
    overflowX,
    overflowY,
    hoverColor,
    flexGrow,
    onClick
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: justifyContent ?? "center",
        alignItems: alignItems ?? "center",
        height: height,
        width: width,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        bgcolor: bgcolor,
        padding: padding,
        margin: margin,
        overflowX: overflowX ? overflowX : "hidden",
        overflowY: overflowY ? overflowY : "hidden",
        border: border,
        borderRadius: borderRadius,
        flexGrow: flexGrow,
        boxShadow: boxShadow,
        boxSizing: "border-box",
        cursor: onClick ? "pointer" : undefined,
        "&:hover": {
          backgroundColor: onClick && hoverbgcolor,
          color: onClick && hoverColor
        }
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}
