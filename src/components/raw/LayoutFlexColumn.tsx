import {Box} from "@mui/material";
import {Property} from "csstype";
import React from "react";

export default function LayoutFlexColumn(props: {
  children: React.ReactNode,
  justifyContent?: Property.JustifyContent,
  alignItems?: Property.AlignItems,
  height?: Property.Height,
  width?: Property.Width,
  minHeight?: Property.Height,
  minWidth?: Property.MinWidth,
  maxWidth?: Property.MaxWidth,
  maxHeight?: Property.MaxHeight,
  bgColor?: Property.BackgroundColor,
  padding?: Property.Padding,
  margin?: Property.Margin,
  border?: Property.Border,
  opacity?: number,
  flexGrow?: number,
  flexShrink?: Property.FlexShrink,
  overflowX?: Property.OverflowX,
  overflowY?: Property.OverflowY,
  borderRadius?: Property.BorderRadius,
  fullHeight?: boolean,
  fullWidth?: boolean,
  fullSize?: boolean,
  pt?: Property.PaddingTop,
  className?: string
})
{
  const {
    children,
    justifyContent,
    alignItems,
    height,
    width,
    minHeight,
    minWidth,
    maxHeight,
    maxWidth,
    bgColor,
    padding,
    margin,
    borderRadius,
    flexGrow,
    flexShrink,
    overflowX,
    overflowY,
    opacity,
    border,
    fullWidth,
    fullHeight,
    fullSize,
    className,
    pt
  } = props;
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContent ?? "center",
        alignItems: alignItems ?? "center",
        height: (fullSize || fullHeight) ? "100%" : height,
        width: (fullSize || fullWidth) ? "100%" : width,
        minHeight: minHeight,
        minWidth: minWidth,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        overflowX: overflowX ? overflowX : "hidden",
        overflowY: overflowY ? overflowY : "hidden",
        opacity: opacity,
        boxSizing: "border-box",
        flexGrow: flexGrow,
        flexShrink: flexShrink ?? 0,
        bgcolor: bgColor,
        padding: padding,
        pt: pt,
        margin: margin,
        border: border,
        borderRadius: borderRadius
      }}
    >
      {children}
    </Box>
  );
}
