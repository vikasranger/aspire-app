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
  bgColor?: Property.BackgroundColor,
  padding?: Property.Padding,
  margin?: Property.Margin,
  border?: Property.Border,
  borderRadius?: Property.BorderRadius,
  boxShadow?: Property.BoxShadow,
  flexGrow?: number,
  flexShrink?: Property.FlexShrink,
  onClick?: () => void,
  overflowX?: Property.OverflowX,
  overflowY?: Property.OverflowY,
  hoverBgColor?: Property.BackgroundColor,
  hoverColor?: Property.Color,
  fullHeight?: boolean,
  fullWidth?: boolean,
  fullSize?: boolean
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
    bgColor,
    padding,
    margin,
    border,
    borderRadius,
    boxShadow,
    hoverBgColor,
    overflowX,
    overflowY,
    hoverColor,
    flexGrow,
    flexShrink,
    fullWidth,
    fullHeight,
    fullSize,
    onClick
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: justifyContent ?? "center",
        alignItems: alignItems ?? "center",
        height: (fullSize || fullHeight) ? "100%" : height,
        width: (fullSize || fullWidth) ? "100%" : width,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        bgcolor: bgColor,
        padding: padding,
        margin: margin,
        overflowX: overflowX ? overflowX : "hidden",
        overflowY: overflowY ? overflowY : "hidden",
        border: border,
        borderRadius: borderRadius,
        flexGrow: flexGrow,
        flexShrink: flexShrink ?? 0,
        boxShadow: boxShadow,
        boxSizing: "border-box",
        cursor: onClick ? "pointer" : undefined,
        "&:hover": {
          backgroundColor: onClick && hoverBgColor,
          color: onClick && hoverColor
        }
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}
