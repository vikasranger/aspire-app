import {Stack} from "@mui/material";
import React from "react";
import {px} from "../../base/theme/Theme.ts";
import {Theme} from "../../base/theme/Theme.ts";

export default function RawStack(props: {
  children: React.ReactNode,
  isSmall?: boolean,
  direction: "row" | "column",
})
{
  const {
    isSmall,
    direction
  } = props;
  return (
    <Stack
      padding={px(isSmall ? Theme.gap.std : Theme.gap.xStd)}
      spacing={px(isSmall ? Theme.gap.std : Theme.gap.xStd)}
      direction={direction}
      justifyContent={"space-around"}
    >
      {props.children}
    </Stack>
  );
}
