import {Tooltip} from "@mui/material";
import React from "react";
import {Theme} from "../../base/theme/Theme.ts";

export type TypeTooltipPlacement =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

export default function RawTooltip(props: {
  title?: string,
  placement?: TypeTooltipPlacement,
  bgcolor?: string,
  color?: string,
  children: React.ReactElement
})
{
  const {
    title,
    placement,
    bgcolor,
    color,
    children
  } = props;

  return (
    <Tooltip
      title={title}
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: bgcolor ?? Theme.color.black,
            color: color
          }
        }
      }}
    >
      {children}
    </Tooltip>
  );
}
